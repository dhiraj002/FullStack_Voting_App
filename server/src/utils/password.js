import crypto from "crypto"

const SCRYPT_PARAMS = {
    N: 2 ** 14,
    r: 8,
    p: 1,
    keyLen: 64,
    saltLen: 16
}

/**
 * Hash password using scrypt
 * Format: scrypt$N=16384,r=8,p=1$key$salt
 * @async
 * @param {string} password 
 * @returns {Promise<string>}
 */
export async function getPasswordHash(password) {
    const salt = crypto.randomBytes(SCRYPT_PARAMS.saltLen).toString("hex")
    const key = await generateKey({password, salt})
    return [
        "scrypt",
        `N=${SCRYPT_PARAMS.N},r=${SCRYPT_PARAMS.r},p=${SCRYPT_PARAMS.p}`,
        key.toString("hex"),
        salt
    ].join("$")
}

/**
 * @async
 * @param {object} options
 * @param {string} options.password 
 * @param {string} options.hash
 * @returns {Promise<boolean>}
 */
export async function verifyPassword({password, hash}) {
    const parts = hash.split("$")

    if(parts.length !== 4 || parts[0] !== "scrypt") {
        return false
    }

    const [, config, key, salt] = parts

    const parsed = Object.fromEntries(config.split(",").map(part => part.split("=")))

    const keyBuffer = Buffer.from(key, "hex")

    const scryptConfig = {
        N: Number(parsed.N),
        r: Number(parsed.r),
        p: Number(parsed.p),
        keyLen: keyBuffer.length
    }

    const computedKey = await generateKey({password, salt, scryptConfig})

    if(keyBuffer.length !== computedKey.length) {
        return false
    }

    return crypto.timingSafeEqual(keyBuffer, computedKey)
}

/**
 * 
 * @param {object} options
 * @param {string} options.password 
 * @param {string} options.salt
 * @param {object} options.scryptConfig
 * @param {number} options.scryptConfig.N
 * @param {number} options.scryptConfig.r
 * @param {number} options.scryptConfig.p
 * @param {number} options.scryptConfig.keyLen
 * @returns {Promise<Buffer<ArrayBufferLike>>}
 */

function generateKey({password, salt, scryptConfig}) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password.normalize("NFKC"), salt, scryptConfig.keyLen, {
            N: scryptConfig.N,
            r: scryptConfig.r,
            p: scryptConfig.p,
            maxmem: 2 * 128 * scryptConfig.N * scryptConfig.r * scryptConfig.p,
        },
        (err, key) => err ? reject(err) : resolve(key)
        ) 
    })
}