
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AutomationRule
 * 
 */
export type AutomationRule = $Result.DefaultSelection<Prisma.$AutomationRulePayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model LaunchCampaignParticipants
 * 
 */
export type LaunchCampaignParticipants = $Result.DefaultSelection<Prisma.$LaunchCampaignParticipantsPayload>
/**
 * Model Streak
 * 
 */
export type Streak = $Result.DefaultSelection<Prisma.$StreakPayload>
/**
 * Model Participation
 * 
 */
export type Participation = $Result.DefaultSelection<Prisma.$ParticipationPayload>
/**
 * Model CampaignPayment
 * 
 */
export type CampaignPayment = $Result.DefaultSelection<Prisma.$CampaignPaymentPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model SecurityEvent
 * 
 */
export type SecurityEvent = $Result.DefaultSelection<Prisma.$SecurityEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostStatus: {
  DRAFT: 'DRAFT',
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const web3ContentWork: {
  YES: 'YES',
  NO: 'NO',
  KINDA: 'KINDA'
};

export type web3ContentWork = (typeof web3ContentWork)[keyof typeof web3ContentWork]


export const CampaignFrequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
  MONTHLY: 'MONTHLY'
};

export type CampaignFrequency = (typeof CampaignFrequency)[keyof typeof CampaignFrequency]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  ENDED: 'ENDED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const StreakStatus: {
  ACTIVE: 'ACTIVE',
  BROKEN: 'BROKEN',
  COMPLETED: 'COMPLETED'
};

export type StreakStatus = (typeof StreakStatus)[keyof typeof StreakStatus]


export const ParticipationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type ParticipationStatus = (typeof ParticipationStatus)[keyof typeof ParticipationStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SecurityEventType: {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  SIGNATURE_VERIFICATION_FAILED: 'SIGNATURE_VERIFICATION_FAILED',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  SUSPICIOUS_ACTIVITY: 'SUSPICIOUS_ACTIVITY',
  ACCOUNT_LOCKED: 'ACCOUNT_LOCKED',
  NONCE_REUSE_ATTEMPT: 'NONCE_REUSE_ATTEMPT',
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS'
};

export type SecurityEventType = (typeof SecurityEventType)[keyof typeof SecurityEventType]


export const SecuritySeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type SecuritySeverity = (typeof SecuritySeverity)[keyof typeof SecuritySeverity]

}

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type web3ContentWork = $Enums.web3ContentWork

export const web3ContentWork: typeof $Enums.web3ContentWork

export type CampaignFrequency = $Enums.CampaignFrequency

export const CampaignFrequency: typeof $Enums.CampaignFrequency

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type StreakStatus = $Enums.StreakStatus

export const StreakStatus: typeof $Enums.StreakStatus

export type ParticipationStatus = $Enums.ParticipationStatus

export const ParticipationStatus: typeof $Enums.ParticipationStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SecurityEventType = $Enums.SecurityEventType

export const SecurityEventType: typeof $Enums.SecurityEventType

export type SecuritySeverity = $Enums.SecuritySeverity

export const SecuritySeverity: typeof $Enums.SecuritySeverity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automationRule`: Exposes CRUD operations for the **AutomationRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationRules
    * const automationRules = await prisma.automationRule.findMany()
    * ```
    */
  get automationRule(): Prisma.AutomationRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.launchCampaignParticipants`: Exposes CRUD operations for the **LaunchCampaignParticipants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaunchCampaignParticipants
    * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findMany()
    * ```
    */
  get launchCampaignParticipants(): Prisma.LaunchCampaignParticipantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streak`: Exposes CRUD operations for the **Streak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streaks
    * const streaks = await prisma.streak.findMany()
    * ```
    */
  get streak(): Prisma.StreakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participation`: Exposes CRUD operations for the **Participation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participations
    * const participations = await prisma.participation.findMany()
    * ```
    */
  get participation(): Prisma.ParticipationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignPayment`: Exposes CRUD operations for the **CampaignPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignPayments
    * const campaignPayments = await prisma.campaignPayment.findMany()
    * ```
    */
  get campaignPayment(): Prisma.CampaignPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityEvent`: Exposes CRUD operations for the **SecurityEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityEvents
    * const securityEvents = await prisma.securityEvent.findMany()
    * ```
    */
  get securityEvent(): Prisma.SecurityEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    User: 'User',
    AutomationRule: 'AutomationRule',
    ActivityLog: 'ActivityLog',
    Campaign: 'Campaign',
    LaunchCampaignParticipants: 'LaunchCampaignParticipants',
    Streak: 'Streak',
    Participation: 'Participation',
    CampaignPayment: 'CampaignPayment',
    Donation: 'Donation',
    SecurityEvent: 'SecurityEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "automationRule" | "activityLog" | "campaign" | "launchCampaignParticipants" | "streak" | "participation" | "campaignPayment" | "donation" | "securityEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AutomationRule: {
        payload: Prisma.$AutomationRulePayload<ExtArgs>
        fields: Prisma.AutomationRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          findFirst: {
            args: Prisma.AutomationRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          findMany: {
            args: Prisma.AutomationRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>[]
          }
          create: {
            args: Prisma.AutomationRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          createMany: {
            args: Prisma.AutomationRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>[]
          }
          delete: {
            args: Prisma.AutomationRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          update: {
            args: Prisma.AutomationRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          deleteMany: {
            args: Prisma.AutomationRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>[]
          }
          upsert: {
            args: Prisma.AutomationRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          aggregate: {
            args: Prisma.AutomationRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationRule>
          }
          groupBy: {
            args: Prisma.AutomationRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationRuleCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationRuleCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      LaunchCampaignParticipants: {
        payload: Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>
        fields: Prisma.LaunchCampaignParticipantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaunchCampaignParticipantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaunchCampaignParticipantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>
          }
          findFirst: {
            args: Prisma.LaunchCampaignParticipantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaunchCampaignParticipantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>
          }
          findMany: {
            args: Prisma.LaunchCampaignParticipantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>[]
          }
          create: {
            args: Prisma.LaunchCampaignParticipantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>
          }
          createMany: {
            args: Prisma.LaunchCampaignParticipantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaunchCampaignParticipantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>[]
          }
          delete: {
            args: Prisma.LaunchCampaignParticipantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>
          }
          update: {
            args: Prisma.LaunchCampaignParticipantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>
          }
          deleteMany: {
            args: Prisma.LaunchCampaignParticipantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaunchCampaignParticipantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaunchCampaignParticipantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>[]
          }
          upsert: {
            args: Prisma.LaunchCampaignParticipantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaunchCampaignParticipantsPayload>
          }
          aggregate: {
            args: Prisma.LaunchCampaignParticipantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaunchCampaignParticipants>
          }
          groupBy: {
            args: Prisma.LaunchCampaignParticipantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaunchCampaignParticipantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaunchCampaignParticipantsCountArgs<ExtArgs>
            result: $Utils.Optional<LaunchCampaignParticipantsCountAggregateOutputType> | number
          }
        }
      }
      Streak: {
        payload: Prisma.$StreakPayload<ExtArgs>
        fields: Prisma.StreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findFirst: {
            args: Prisma.StreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findMany: {
            args: Prisma.StreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          create: {
            args: Prisma.StreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          createMany: {
            args: Prisma.StreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          delete: {
            args: Prisma.StreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          update: {
            args: Prisma.StreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          deleteMany: {
            args: Prisma.StreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreakUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          upsert: {
            args: Prisma.StreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          aggregate: {
            args: Prisma.StreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreak>
          }
          groupBy: {
            args: Prisma.StreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreakCountArgs<ExtArgs>
            result: $Utils.Optional<StreakCountAggregateOutputType> | number
          }
        }
      }
      Participation: {
        payload: Prisma.$ParticipationPayload<ExtArgs>
        fields: Prisma.ParticipationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findFirst: {
            args: Prisma.ParticipationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findMany: {
            args: Prisma.ParticipationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          create: {
            args: Prisma.ParticipationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          createMany: {
            args: Prisma.ParticipationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          delete: {
            args: Prisma.ParticipationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          update: {
            args: Prisma.ParticipationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          deleteMany: {
            args: Prisma.ParticipationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          upsert: {
            args: Prisma.ParticipationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          aggregate: {
            args: Prisma.ParticipationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipation>
          }
          groupBy: {
            args: Prisma.ParticipationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipationCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationCountAggregateOutputType> | number
          }
        }
      }
      CampaignPayment: {
        payload: Prisma.$CampaignPaymentPayload<ExtArgs>
        fields: Prisma.CampaignPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          findFirst: {
            args: Prisma.CampaignPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          findMany: {
            args: Prisma.CampaignPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>[]
          }
          create: {
            args: Prisma.CampaignPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          createMany: {
            args: Prisma.CampaignPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>[]
          }
          delete: {
            args: Prisma.CampaignPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          update: {
            args: Prisma.CampaignPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          deleteMany: {
            args: Prisma.CampaignPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>[]
          }
          upsert: {
            args: Prisma.CampaignPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPaymentPayload>
          }
          aggregate: {
            args: Prisma.CampaignPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignPayment>
          }
          groupBy: {
            args: Prisma.CampaignPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignPaymentCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      SecurityEvent: {
        payload: Prisma.$SecurityEventPayload<ExtArgs>
        fields: Prisma.SecurityEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findFirst: {
            args: Prisma.SecurityEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findMany: {
            args: Prisma.SecurityEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          create: {
            args: Prisma.SecurityEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          createMany: {
            args: Prisma.SecurityEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          delete: {
            args: Prisma.SecurityEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          update: {
            args: Prisma.SecurityEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          deleteMany: {
            args: Prisma.SecurityEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          upsert: {
            args: Prisma.SecurityEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          aggregate: {
            args: Prisma.SecurityEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityEvent>
          }
          groupBy: {
            args: Prisma.SecurityEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityEventCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    automationRule?: AutomationRuleOmit
    activityLog?: ActivityLogOmit
    campaign?: CampaignOmit
    launchCampaignParticipants?: LaunchCampaignParticipantsOmit
    streak?: StreakOmit
    participation?: ParticipationOmit
    campaignPayment?: CampaignPaymentOmit
    donation?: DonationOmit
    securityEvent?: SecurityEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    automationRules: number
    activityLogs: number
    campaigns: number
    streaks: number
    participations: number
    donations: number
    campaignPayments: number
    securityEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    automationRules?: boolean | UserCountOutputTypeCountAutomationRulesArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    streaks?: boolean | UserCountOutputTypeCountStreaksArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    donations?: boolean | UserCountOutputTypeCountDonationsArgs
    campaignPayments?: boolean | UserCountOutputTypeCountCampaignPaymentsArgs
    securityEvents?: boolean | UserCountOutputTypeCountSecurityEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAutomationRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationRuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignPaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    streaks: number
    participations: number
    donations: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streaks?: boolean | CampaignCountOutputTypeCountStreaksArgs
    participations?: boolean | CampaignCountOutputTypeCountParticipationsArgs
    donations?: boolean | CampaignCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountStreaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    parentAuthorFid: number | null
  }

  export type PostSumAggregateOutputType = {
    parentAuthorFid: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    signerUuid: string | null
    text: string | null
    parent: string | null
    channelId: string | null
    parentAuthorFid: number | null
    postHash: string | null
    status: $Enums.PostStatus | null
    scheduledAt: Date | null
    publishedAt: Date | null
    qstashMessageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    signerUuid: string | null
    text: string | null
    parent: string | null
    channelId: string | null
    parentAuthorFid: number | null
    postHash: string | null
    status: $Enums.PostStatus | null
    scheduledAt: Date | null
    publishedAt: Date | null
    qstashMessageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    signerUuid: number
    text: number
    parent: number
    channelId: number
    parentAuthorFid: number
    embeds: number
    postHash: number
    status: number
    scheduledAt: number
    publishedAt: number
    qstashMessageId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    parentAuthorFid?: true
  }

  export type PostSumAggregateInputType = {
    parentAuthorFid?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    signerUuid?: true
    text?: true
    parent?: true
    channelId?: true
    parentAuthorFid?: true
    postHash?: true
    status?: true
    scheduledAt?: true
    publishedAt?: true
    qstashMessageId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    signerUuid?: true
    text?: true
    parent?: true
    channelId?: true
    parentAuthorFid?: true
    postHash?: true
    status?: true
    scheduledAt?: true
    publishedAt?: true
    qstashMessageId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    signerUuid?: true
    text?: true
    parent?: true
    channelId?: true
    parentAuthorFid?: true
    embeds?: true
    postHash?: true
    status?: true
    scheduledAt?: true
    publishedAt?: true
    qstashMessageId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    signerUuid: string | null
    text: string
    parent: string | null
    channelId: string | null
    parentAuthorFid: number | null
    embeds: JsonValue | null
    postHash: string | null
    status: $Enums.PostStatus
    scheduledAt: Date | null
    publishedAt: Date | null
    qstashMessageId: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signerUuid?: boolean
    text?: boolean
    parent?: boolean
    channelId?: boolean
    parentAuthorFid?: boolean
    embeds?: boolean
    postHash?: boolean
    status?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    qstashMessageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signerUuid?: boolean
    text?: boolean
    parent?: boolean
    channelId?: boolean
    parentAuthorFid?: boolean
    embeds?: boolean
    postHash?: boolean
    status?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    qstashMessageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signerUuid?: boolean
    text?: boolean
    parent?: boolean
    channelId?: boolean
    parentAuthorFid?: boolean
    embeds?: boolean
    postHash?: boolean
    status?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    qstashMessageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    signerUuid?: boolean
    text?: boolean
    parent?: boolean
    channelId?: boolean
    parentAuthorFid?: boolean
    embeds?: boolean
    postHash?: boolean
    status?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    qstashMessageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "signerUuid" | "text" | "parent" | "channelId" | "parentAuthorFid" | "embeds" | "postHash" | "status" | "scheduledAt" | "publishedAt" | "qstashMessageId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      signerUuid: string | null
      text: string
      parent: string | null
      channelId: string | null
      parentAuthorFid: number | null
      embeds: Prisma.JsonValue | null
      postHash: string | null
      status: $Enums.PostStatus
      scheduledAt: Date | null
      publishedAt: Date | null
      qstashMessageId: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly signerUuid: FieldRef<"Post", 'String'>
    readonly text: FieldRef<"Post", 'String'>
    readonly parent: FieldRef<"Post", 'String'>
    readonly channelId: FieldRef<"Post", 'String'>
    readonly parentAuthorFid: FieldRef<"Post", 'Int'>
    readonly embeds: FieldRef<"Post", 'Json'>
    readonly postHash: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly scheduledAt: FieldRef<"Post", 'DateTime'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly qstashMessageId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    fid: number | null
    dmsSentThisWeek: number | null
    postsThisWeek: number | null
    loginAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    fid: number | null
    dmsSentThisWeek: number | null
    postsThisWeek: number | null
    loginAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    fid: number | null
    username: string | null
    displayName: string | null
    pfpUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    signerUuid: string | null
    isUuidApprove: boolean | null
    signerRegDeadline: Date | null
    signerPublicKey: string | null
    signerApprovalUrl: string | null
    role: $Enums.UserRole | null
    isPremium: boolean | null
    premiumExpiresAt: Date | null
    dmsSentThisWeek: number | null
    postsThisWeek: number | null
    weekResetDate: Date | null
    lastLoginAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    lastNonceUsed: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    fid: number | null
    username: string | null
    displayName: string | null
    pfpUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    signerUuid: string | null
    isUuidApprove: boolean | null
    signerRegDeadline: Date | null
    signerPublicKey: string | null
    signerApprovalUrl: string | null
    role: $Enums.UserRole | null
    isPremium: boolean | null
    premiumExpiresAt: Date | null
    dmsSentThisWeek: number | null
    postsThisWeek: number | null
    weekResetDate: Date | null
    lastLoginAt: Date | null
    loginAttempts: number | null
    lockedUntil: Date | null
    lastNonceUsed: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    walletAddress: number
    fid: number
    username: number
    displayName: number
    pfpUrl: number
    createdAt: number
    updatedAt: number
    signerUuid: number
    isUuidApprove: number
    signerRegDeadline: number
    signerPublicKey: number
    signerApprovalUrl: number
    role: number
    isPremium: number
    premiumExpiresAt: number
    dmsSentThisWeek: number
    postsThisWeek: number
    weekResetDate: number
    lastLoginAt: number
    loginAttempts: number
    lockedUntil: number
    lastNonceUsed: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    fid?: true
    dmsSentThisWeek?: true
    postsThisWeek?: true
    loginAttempts?: true
  }

  export type UserSumAggregateInputType = {
    fid?: true
    dmsSentThisWeek?: true
    postsThisWeek?: true
    loginAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    walletAddress?: true
    fid?: true
    username?: true
    displayName?: true
    pfpUrl?: true
    createdAt?: true
    updatedAt?: true
    signerUuid?: true
    isUuidApprove?: true
    signerRegDeadline?: true
    signerPublicKey?: true
    signerApprovalUrl?: true
    role?: true
    isPremium?: true
    premiumExpiresAt?: true
    dmsSentThisWeek?: true
    postsThisWeek?: true
    weekResetDate?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    lastNonceUsed?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    fid?: true
    username?: true
    displayName?: true
    pfpUrl?: true
    createdAt?: true
    updatedAt?: true
    signerUuid?: true
    isUuidApprove?: true
    signerRegDeadline?: true
    signerPublicKey?: true
    signerApprovalUrl?: true
    role?: true
    isPremium?: true
    premiumExpiresAt?: true
    dmsSentThisWeek?: true
    postsThisWeek?: true
    weekResetDate?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    lastNonceUsed?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    walletAddress?: true
    fid?: true
    username?: true
    displayName?: true
    pfpUrl?: true
    createdAt?: true
    updatedAt?: true
    signerUuid?: true
    isUuidApprove?: true
    signerRegDeadline?: true
    signerPublicKey?: true
    signerApprovalUrl?: true
    role?: true
    isPremium?: true
    premiumExpiresAt?: true
    dmsSentThisWeek?: true
    postsThisWeek?: true
    weekResetDate?: true
    lastLoginAt?: true
    loginAttempts?: true
    lockedUntil?: true
    lastNonceUsed?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    walletAddress: string
    fid: number
    username: string
    displayName: string | null
    pfpUrl: string | null
    createdAt: Date
    updatedAt: Date
    signerUuid: string | null
    isUuidApprove: boolean | null
    signerRegDeadline: Date | null
    signerPublicKey: string | null
    signerApprovalUrl: string | null
    role: $Enums.UserRole
    isPremium: boolean
    premiumExpiresAt: Date | null
    dmsSentThisWeek: number
    postsThisWeek: number
    weekResetDate: Date
    lastLoginAt: Date | null
    loginAttempts: number
    lockedUntil: Date | null
    lastNonceUsed: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfpUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signerUuid?: boolean
    isUuidApprove?: boolean
    signerRegDeadline?: boolean
    signerPublicKey?: boolean
    signerApprovalUrl?: boolean
    role?: boolean
    isPremium?: boolean
    premiumExpiresAt?: boolean
    dmsSentThisWeek?: boolean
    postsThisWeek?: boolean
    weekResetDate?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    lastNonceUsed?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    automationRules?: boolean | User$automationRulesArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    streaks?: boolean | User$streaksArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    campaignPayments?: boolean | User$campaignPaymentsArgs<ExtArgs>
    securityEvents?: boolean | User$securityEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfpUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signerUuid?: boolean
    isUuidApprove?: boolean
    signerRegDeadline?: boolean
    signerPublicKey?: boolean
    signerApprovalUrl?: boolean
    role?: boolean
    isPremium?: boolean
    premiumExpiresAt?: boolean
    dmsSentThisWeek?: boolean
    postsThisWeek?: boolean
    weekResetDate?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    lastNonceUsed?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfpUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signerUuid?: boolean
    isUuidApprove?: boolean
    signerRegDeadline?: boolean
    signerPublicKey?: boolean
    signerApprovalUrl?: boolean
    role?: boolean
    isPremium?: boolean
    premiumExpiresAt?: boolean
    dmsSentThisWeek?: boolean
    postsThisWeek?: boolean
    weekResetDate?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    lastNonceUsed?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    fid?: boolean
    username?: boolean
    displayName?: boolean
    pfpUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    signerUuid?: boolean
    isUuidApprove?: boolean
    signerRegDeadline?: boolean
    signerPublicKey?: boolean
    signerApprovalUrl?: boolean
    role?: boolean
    isPremium?: boolean
    premiumExpiresAt?: boolean
    dmsSentThisWeek?: boolean
    postsThisWeek?: boolean
    weekResetDate?: boolean
    lastLoginAt?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    lastNonceUsed?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "fid" | "username" | "displayName" | "pfpUrl" | "createdAt" | "updatedAt" | "signerUuid" | "isUuidApprove" | "signerRegDeadline" | "signerPublicKey" | "signerApprovalUrl" | "role" | "isPremium" | "premiumExpiresAt" | "dmsSentThisWeek" | "postsThisWeek" | "weekResetDate" | "lastLoginAt" | "loginAttempts" | "lockedUntil" | "lastNonceUsed", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    automationRules?: boolean | User$automationRulesArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    streaks?: boolean | User$streaksArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    campaignPayments?: boolean | User$campaignPaymentsArgs<ExtArgs>
    securityEvents?: boolean | User$securityEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      automationRules: Prisma.$AutomationRulePayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      streaks: Prisma.$StreakPayload<ExtArgs>[]
      participations: Prisma.$ParticipationPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
      campaignPayments: Prisma.$CampaignPaymentPayload<ExtArgs>[]
      securityEvents: Prisma.$SecurityEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      fid: number
      username: string
      displayName: string | null
      pfpUrl: string | null
      createdAt: Date
      updatedAt: Date
      signerUuid: string | null
      isUuidApprove: boolean | null
      signerRegDeadline: Date | null
      signerPublicKey: string | null
      signerApprovalUrl: string | null
      role: $Enums.UserRole
      isPremium: boolean
      premiumExpiresAt: Date | null
      dmsSentThisWeek: number
      postsThisWeek: number
      weekResetDate: Date
      lastLoginAt: Date | null
      loginAttempts: number
      lockedUntil: Date | null
      lastNonceUsed: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    automationRules<T extends User$automationRulesArgs<ExtArgs> = {}>(args?: Subset<T, User$automationRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streaks<T extends User$streaksArgs<ExtArgs> = {}>(args?: Subset<T, User$streaksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends User$donationsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaignPayments<T extends User$campaignPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityEvents<T extends User$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly fid: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly pfpUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly signerUuid: FieldRef<"User", 'String'>
    readonly isUuidApprove: FieldRef<"User", 'Boolean'>
    readonly signerRegDeadline: FieldRef<"User", 'DateTime'>
    readonly signerPublicKey: FieldRef<"User", 'String'>
    readonly signerApprovalUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly premiumExpiresAt: FieldRef<"User", 'DateTime'>
    readonly dmsSentThisWeek: FieldRef<"User", 'Int'>
    readonly postsThisWeek: FieldRef<"User", 'Int'>
    readonly weekResetDate: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly loginAttempts: FieldRef<"User", 'Int'>
    readonly lockedUntil: FieldRef<"User", 'DateTime'>
    readonly lastNonceUsed: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.automationRules
   */
  export type User$automationRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    where?: AutomationRuleWhereInput
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    cursor?: AutomationRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.streaks
   */
  export type User$streaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    cursor?: StreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    cursor?: ParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * User.donations
   */
  export type User$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.campaignPayments
   */
  export type User$campaignPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    where?: CampaignPaymentWhereInput
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    cursor?: CampaignPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * User.securityEvents
   */
  export type User$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    cursor?: SecurityEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AutomationRule
   */

  export type AggregateAutomationRule = {
    _count: AutomationRuleCountAggregateOutputType | null
    _avg: AutomationRuleAvgAggregateOutputType | null
    _sum: AutomationRuleSumAggregateOutputType | null
    _min: AutomationRuleMinAggregateOutputType | null
    _max: AutomationRuleMaxAggregateOutputType | null
  }

  export type AutomationRuleAvgAggregateOutputType = {
    timesTriggered: number | null
  }

  export type AutomationRuleSumAggregateOutputType = {
    timesTriggered: number | null
  }

  export type AutomationRuleMinAggregateOutputType = {
    id: string | null
    triggerWord: string | null
    response: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    timesTriggered: number | null
    lastTriggered: Date | null
  }

  export type AutomationRuleMaxAggregateOutputType = {
    id: string | null
    triggerWord: string | null
    response: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    timesTriggered: number | null
    lastTriggered: Date | null
  }

  export type AutomationRuleCountAggregateOutputType = {
    id: number
    triggerWord: number
    response: number
    isActive: number
    createdAt: number
    updatedAt: number
    userId: number
    timesTriggered: number
    lastTriggered: number
    _all: number
  }


  export type AutomationRuleAvgAggregateInputType = {
    timesTriggered?: true
  }

  export type AutomationRuleSumAggregateInputType = {
    timesTriggered?: true
  }

  export type AutomationRuleMinAggregateInputType = {
    id?: true
    triggerWord?: true
    response?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    timesTriggered?: true
    lastTriggered?: true
  }

  export type AutomationRuleMaxAggregateInputType = {
    id?: true
    triggerWord?: true
    response?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    timesTriggered?: true
    lastTriggered?: true
  }

  export type AutomationRuleCountAggregateInputType = {
    id?: true
    triggerWord?: true
    response?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    timesTriggered?: true
    lastTriggered?: true
    _all?: true
  }

  export type AutomationRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationRule to aggregate.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationRules
    **/
    _count?: true | AutomationRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutomationRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutomationRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationRuleMaxAggregateInputType
  }

  export type GetAutomationRuleAggregateType<T extends AutomationRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationRule[P]>
      : GetScalarType<T[P], AggregateAutomationRule[P]>
  }




  export type AutomationRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationRuleWhereInput
    orderBy?: AutomationRuleOrderByWithAggregationInput | AutomationRuleOrderByWithAggregationInput[]
    by: AutomationRuleScalarFieldEnum[] | AutomationRuleScalarFieldEnum
    having?: AutomationRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationRuleCountAggregateInputType | true
    _avg?: AutomationRuleAvgAggregateInputType
    _sum?: AutomationRuleSumAggregateInputType
    _min?: AutomationRuleMinAggregateInputType
    _max?: AutomationRuleMaxAggregateInputType
  }

  export type AutomationRuleGroupByOutputType = {
    id: string
    triggerWord: string
    response: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    timesTriggered: number
    lastTriggered: Date | null
    _count: AutomationRuleCountAggregateOutputType | null
    _avg: AutomationRuleAvgAggregateOutputType | null
    _sum: AutomationRuleSumAggregateOutputType | null
    _min: AutomationRuleMinAggregateOutputType | null
    _max: AutomationRuleMaxAggregateOutputType | null
  }

  type GetAutomationRuleGroupByPayload<T extends AutomationRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationRuleGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationRuleGroupByOutputType[P]>
        }
      >
    >


  export type AutomationRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerWord?: boolean
    response?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    timesTriggered?: boolean
    lastTriggered?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationRule"]>

  export type AutomationRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerWord?: boolean
    response?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    timesTriggered?: boolean
    lastTriggered?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationRule"]>

  export type AutomationRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerWord?: boolean
    response?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    timesTriggered?: boolean
    lastTriggered?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationRule"]>

  export type AutomationRuleSelectScalar = {
    id?: boolean
    triggerWord?: boolean
    response?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    timesTriggered?: boolean
    lastTriggered?: boolean
  }

  export type AutomationRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerWord" | "response" | "isActive" | "createdAt" | "updatedAt" | "userId" | "timesTriggered" | "lastTriggered", ExtArgs["result"]["automationRule"]>
  export type AutomationRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AutomationRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AutomationRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AutomationRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationRule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerWord: string
      response: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
      timesTriggered: number
      lastTriggered: Date | null
    }, ExtArgs["result"]["automationRule"]>
    composites: {}
  }

  type AutomationRuleGetPayload<S extends boolean | null | undefined | AutomationRuleDefaultArgs> = $Result.GetResult<Prisma.$AutomationRulePayload, S>

  type AutomationRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationRuleCountAggregateInputType | true
    }

  export interface AutomationRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationRule'], meta: { name: 'AutomationRule' } }
    /**
     * Find zero or one AutomationRule that matches the filter.
     * @param {AutomationRuleFindUniqueArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationRuleFindUniqueArgs>(args: SelectSubset<T, AutomationRuleFindUniqueArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutomationRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationRuleFindUniqueOrThrowArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutomationRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleFindFirstArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationRuleFindFirstArgs>(args?: SelectSubset<T, AutomationRuleFindFirstArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutomationRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleFindFirstOrThrowArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutomationRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationRules
     * const automationRules = await prisma.automationRule.findMany()
     * 
     * // Get first 10 AutomationRules
     * const automationRules = await prisma.automationRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationRuleWithIdOnly = await prisma.automationRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationRuleFindManyArgs>(args?: SelectSubset<T, AutomationRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutomationRule.
     * @param {AutomationRuleCreateArgs} args - Arguments to create a AutomationRule.
     * @example
     * // Create one AutomationRule
     * const AutomationRule = await prisma.automationRule.create({
     *   data: {
     *     // ... data to create a AutomationRule
     *   }
     * })
     * 
     */
    create<T extends AutomationRuleCreateArgs>(args: SelectSubset<T, AutomationRuleCreateArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutomationRules.
     * @param {AutomationRuleCreateManyArgs} args - Arguments to create many AutomationRules.
     * @example
     * // Create many AutomationRules
     * const automationRule = await prisma.automationRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationRuleCreateManyArgs>(args?: SelectSubset<T, AutomationRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationRules and returns the data saved in the database.
     * @param {AutomationRuleCreateManyAndReturnArgs} args - Arguments to create many AutomationRules.
     * @example
     * // Create many AutomationRules
     * const automationRule = await prisma.automationRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationRules and only return the `id`
     * const automationRuleWithIdOnly = await prisma.automationRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutomationRule.
     * @param {AutomationRuleDeleteArgs} args - Arguments to delete one AutomationRule.
     * @example
     * // Delete one AutomationRule
     * const AutomationRule = await prisma.automationRule.delete({
     *   where: {
     *     // ... filter to delete one AutomationRule
     *   }
     * })
     * 
     */
    delete<T extends AutomationRuleDeleteArgs>(args: SelectSubset<T, AutomationRuleDeleteArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutomationRule.
     * @param {AutomationRuleUpdateArgs} args - Arguments to update one AutomationRule.
     * @example
     * // Update one AutomationRule
     * const automationRule = await prisma.automationRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationRuleUpdateArgs>(args: SelectSubset<T, AutomationRuleUpdateArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutomationRules.
     * @param {AutomationRuleDeleteManyArgs} args - Arguments to filter AutomationRules to delete.
     * @example
     * // Delete a few AutomationRules
     * const { count } = await prisma.automationRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationRuleDeleteManyArgs>(args?: SelectSubset<T, AutomationRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationRules
     * const automationRule = await prisma.automationRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationRuleUpdateManyArgs>(args: SelectSubset<T, AutomationRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationRules and returns the data updated in the database.
     * @param {AutomationRuleUpdateManyAndReturnArgs} args - Arguments to update many AutomationRules.
     * @example
     * // Update many AutomationRules
     * const automationRule = await prisma.automationRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomationRules and only return the `id`
     * const automationRuleWithIdOnly = await prisma.automationRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutomationRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutomationRule.
     * @param {AutomationRuleUpsertArgs} args - Arguments to update or create a AutomationRule.
     * @example
     * // Update or create a AutomationRule
     * const automationRule = await prisma.automationRule.upsert({
     *   create: {
     *     // ... data to create a AutomationRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationRule we want to update
     *   }
     * })
     */
    upsert<T extends AutomationRuleUpsertArgs>(args: SelectSubset<T, AutomationRuleUpsertArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutomationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleCountArgs} args - Arguments to filter AutomationRules to count.
     * @example
     * // Count the number of AutomationRules
     * const count = await prisma.automationRule.count({
     *   where: {
     *     // ... the filter for the AutomationRules we want to count
     *   }
     * })
    **/
    count<T extends AutomationRuleCountArgs>(
      args?: Subset<T, AutomationRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutomationRuleAggregateArgs>(args: Subset<T, AutomationRuleAggregateArgs>): Prisma.PrismaPromise<GetAutomationRuleAggregateType<T>>

    /**
     * Group by AutomationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutomationRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationRuleGroupByArgs['orderBy'] }
        : { orderBy?: AutomationRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutomationRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationRule model
   */
  readonly fields: AutomationRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutomationRule model
   */
  interface AutomationRuleFieldRefs {
    readonly id: FieldRef<"AutomationRule", 'String'>
    readonly triggerWord: FieldRef<"AutomationRule", 'String'>
    readonly response: FieldRef<"AutomationRule", 'String'>
    readonly isActive: FieldRef<"AutomationRule", 'Boolean'>
    readonly createdAt: FieldRef<"AutomationRule", 'DateTime'>
    readonly updatedAt: FieldRef<"AutomationRule", 'DateTime'>
    readonly userId: FieldRef<"AutomationRule", 'String'>
    readonly timesTriggered: FieldRef<"AutomationRule", 'Int'>
    readonly lastTriggered: FieldRef<"AutomationRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutomationRule findUnique
   */
  export type AutomationRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule findUniqueOrThrow
   */
  export type AutomationRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule findFirst
   */
  export type AutomationRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationRules.
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationRules.
     */
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * AutomationRule findFirstOrThrow
   */
  export type AutomationRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationRules.
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationRules.
     */
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * AutomationRule findMany
   */
  export type AutomationRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRules to fetch.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationRules.
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * AutomationRule create
   */
  export type AutomationRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationRule.
     */
    data: XOR<AutomationRuleCreateInput, AutomationRuleUncheckedCreateInput>
  }

  /**
   * AutomationRule createMany
   */
  export type AutomationRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationRules.
     */
    data: AutomationRuleCreateManyInput | AutomationRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationRule createManyAndReturn
   */
  export type AutomationRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * The data used to create many AutomationRules.
     */
    data: AutomationRuleCreateManyInput | AutomationRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationRule update
   */
  export type AutomationRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationRule.
     */
    data: XOR<AutomationRuleUpdateInput, AutomationRuleUncheckedUpdateInput>
    /**
     * Choose, which AutomationRule to update.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule updateMany
   */
  export type AutomationRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationRules.
     */
    data: XOR<AutomationRuleUpdateManyMutationInput, AutomationRuleUncheckedUpdateManyInput>
    /**
     * Filter which AutomationRules to update
     */
    where?: AutomationRuleWhereInput
    /**
     * Limit how many AutomationRules to update.
     */
    limit?: number
  }

  /**
   * AutomationRule updateManyAndReturn
   */
  export type AutomationRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * The data used to update AutomationRules.
     */
    data: XOR<AutomationRuleUpdateManyMutationInput, AutomationRuleUncheckedUpdateManyInput>
    /**
     * Filter which AutomationRules to update
     */
    where?: AutomationRuleWhereInput
    /**
     * Limit how many AutomationRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationRule upsert
   */
  export type AutomationRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationRule to update in case it exists.
     */
    where: AutomationRuleWhereUniqueInput
    /**
     * In case the AutomationRule found by the `where` argument doesn't exist, create a new AutomationRule with this data.
     */
    create: XOR<AutomationRuleCreateInput, AutomationRuleUncheckedCreateInput>
    /**
     * In case the AutomationRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationRuleUpdateInput, AutomationRuleUncheckedUpdateInput>
  }

  /**
   * AutomationRule delete
   */
  export type AutomationRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter which AutomationRule to delete.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule deleteMany
   */
  export type AutomationRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationRules to delete
     */
    where?: AutomationRuleWhereInput
    /**
     * Limit how many AutomationRules to delete.
     */
    limit?: number
  }

  /**
   * AutomationRule without action
   */
  export type AutomationRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomationRule
     */
    omit?: AutomationRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    details: string | null
    timestamp: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    details: string | null
    timestamp: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    details: number
    timestamp: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    details?: true
    timestamp?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    details?: true
    timestamp?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    details?: true
    timestamp?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    action: string
    details: string | null
    timestamp: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "details" | "timestamp" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      details: string | null
      timestamp: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly timestamp: FieldRef<"ActivityLog", 'DateTime'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    minStreakLength: number | null
    totalDonations: Decimal | null
    donationGoal: Decimal | null
  }

  export type CampaignSumAggregateOutputType = {
    minStreakLength: number | null
    totalDonations: Decimal | null
    donationGoal: Decimal | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    imageUrl: string | null
    startDate: Date | null
    endDate: Date | null
    frequency: $Enums.CampaignFrequency | null
    minStreakLength: number | null
    contentRequirements: string | null
    rewards: string | null
    prizePool: string | null
    totalDonations: Decimal | null
    donationGoal: Decimal | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    imageUrl: string | null
    startDate: Date | null
    endDate: Date | null
    frequency: $Enums.CampaignFrequency | null
    minStreakLength: number | null
    contentRequirements: string | null
    rewards: string | null
    prizePool: string | null
    totalDonations: Decimal | null
    donationGoal: Decimal | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    imageUrl: number
    startDate: number
    endDate: number
    frequency: number
    minStreakLength: number
    contentRequirements: number
    rewards: number
    prizePool: number
    totalDonations: number
    donationGoal: number
    status: number
    createdAt: number
    updatedAt: number
    creatorId: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    minStreakLength?: true
    totalDonations?: true
    donationGoal?: true
  }

  export type CampaignSumAggregateInputType = {
    minStreakLength?: true
    totalDonations?: true
    donationGoal?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    frequency?: true
    minStreakLength?: true
    contentRequirements?: true
    rewards?: true
    prizePool?: true
    totalDonations?: true
    donationGoal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    frequency?: true
    minStreakLength?: true
    contentRequirements?: true
    rewards?: true
    prizePool?: true
    totalDonations?: true
    donationGoal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    imageUrl?: true
    startDate?: true
    endDate?: true
    frequency?: true
    minStreakLength?: true
    contentRequirements?: true
    rewards?: true
    prizePool?: true
    totalDonations?: true
    donationGoal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    description: string
    category: string
    imageUrl: string | null
    startDate: Date
    endDate: Date
    frequency: $Enums.CampaignFrequency
    minStreakLength: number
    contentRequirements: string | null
    rewards: string | null
    prizePool: string | null
    totalDonations: Decimal
    donationGoal: Decimal | null
    status: $Enums.CampaignStatus
    createdAt: Date
    updatedAt: Date
    creatorId: string
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    minStreakLength?: boolean
    contentRequirements?: boolean
    rewards?: boolean
    prizePool?: boolean
    totalDonations?: boolean
    donationGoal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    streaks?: boolean | Campaign$streaksArgs<ExtArgs>
    participations?: boolean | Campaign$participationsArgs<ExtArgs>
    donations?: boolean | Campaign$donationsArgs<ExtArgs>
    paymentInfo?: boolean | Campaign$paymentInfoArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    minStreakLength?: boolean
    contentRequirements?: boolean
    rewards?: boolean
    prizePool?: boolean
    totalDonations?: boolean
    donationGoal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    minStreakLength?: boolean
    contentRequirements?: boolean
    rewards?: boolean
    prizePool?: boolean
    totalDonations?: boolean
    donationGoal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    minStreakLength?: boolean
    contentRequirements?: boolean
    rewards?: boolean
    prizePool?: boolean
    totalDonations?: boolean
    donationGoal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "imageUrl" | "startDate" | "endDate" | "frequency" | "minStreakLength" | "contentRequirements" | "rewards" | "prizePool" | "totalDonations" | "donationGoal" | "status" | "createdAt" | "updatedAt" | "creatorId", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    streaks?: boolean | Campaign$streaksArgs<ExtArgs>
    participations?: boolean | Campaign$participationsArgs<ExtArgs>
    donations?: boolean | Campaign$donationsArgs<ExtArgs>
    paymentInfo?: boolean | Campaign$paymentInfoArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      streaks: Prisma.$StreakPayload<ExtArgs>[]
      participations: Prisma.$ParticipationPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
      paymentInfo: Prisma.$CampaignPaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      category: string
      imageUrl: string | null
      startDate: Date
      endDate: Date
      frequency: $Enums.CampaignFrequency
      minStreakLength: number
      contentRequirements: string | null
      rewards: string | null
      prizePool: string | null
      totalDonations: Prisma.Decimal
      donationGoal: Prisma.Decimal | null
      status: $Enums.CampaignStatus
      createdAt: Date
      updatedAt: Date
      creatorId: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    streaks<T extends Campaign$streaksArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$streaksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends Campaign$participationsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends Campaign$donationsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentInfo<T extends Campaign$paymentInfoArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$paymentInfoArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly category: FieldRef<"Campaign", 'String'>
    readonly imageUrl: FieldRef<"Campaign", 'String'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly frequency: FieldRef<"Campaign", 'CampaignFrequency'>
    readonly minStreakLength: FieldRef<"Campaign", 'Int'>
    readonly contentRequirements: FieldRef<"Campaign", 'String'>
    readonly rewards: FieldRef<"Campaign", 'String'>
    readonly prizePool: FieldRef<"Campaign", 'String'>
    readonly totalDonations: FieldRef<"Campaign", 'Decimal'>
    readonly donationGoal: FieldRef<"Campaign", 'Decimal'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly creatorId: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.streaks
   */
  export type Campaign$streaksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    cursor?: StreakWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Campaign.participations
   */
  export type Campaign$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    cursor?: ParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Campaign.donations
   */
  export type Campaign$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Campaign.paymentInfo
   */
  export type Campaign$paymentInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    where?: CampaignPaymentWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model LaunchCampaignParticipants
   */

  export type AggregateLaunchCampaignParticipants = {
    _count: LaunchCampaignParticipantsCountAggregateOutputType | null
    _avg: LaunchCampaignParticipantsAvgAggregateOutputType | null
    _sum: LaunchCampaignParticipantsSumAggregateOutputType | null
    _min: LaunchCampaignParticipantsMinAggregateOutputType | null
    _max: LaunchCampaignParticipantsMaxAggregateOutputType | null
  }

  export type LaunchCampaignParticipantsAvgAggregateOutputType = {
    fid: number | null
  }

  export type LaunchCampaignParticipantsSumAggregateOutputType = {
    fid: number | null
  }

  export type LaunchCampaignParticipantsMinAggregateOutputType = {
    id: string | null
    fid: number | null
    username: string | null
    email: string | null
    xHandle: string | null
    web3ContentWork: $Enums.web3ContentWork | null
    commitment: boolean | null
    helpNeeded: string | null
    storyTellingVibe: string | null
    userId: string | null
    isApproved: boolean | null
    following_team: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaunchCampaignParticipantsMaxAggregateOutputType = {
    id: string | null
    fid: number | null
    username: string | null
    email: string | null
    xHandle: string | null
    web3ContentWork: $Enums.web3ContentWork | null
    commitment: boolean | null
    helpNeeded: string | null
    storyTellingVibe: string | null
    userId: string | null
    isApproved: boolean | null
    following_team: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaunchCampaignParticipantsCountAggregateOutputType = {
    id: number
    fid: number
    username: number
    email: number
    xHandle: number
    web3ContentWork: number
    commitment: number
    helpNeeded: number
    storyTellingVibe: number
    userId: number
    isApproved: number
    following_team: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LaunchCampaignParticipantsAvgAggregateInputType = {
    fid?: true
  }

  export type LaunchCampaignParticipantsSumAggregateInputType = {
    fid?: true
  }

  export type LaunchCampaignParticipantsMinAggregateInputType = {
    id?: true
    fid?: true
    username?: true
    email?: true
    xHandle?: true
    web3ContentWork?: true
    commitment?: true
    helpNeeded?: true
    storyTellingVibe?: true
    userId?: true
    isApproved?: true
    following_team?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaunchCampaignParticipantsMaxAggregateInputType = {
    id?: true
    fid?: true
    username?: true
    email?: true
    xHandle?: true
    web3ContentWork?: true
    commitment?: true
    helpNeeded?: true
    storyTellingVibe?: true
    userId?: true
    isApproved?: true
    following_team?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaunchCampaignParticipantsCountAggregateInputType = {
    id?: true
    fid?: true
    username?: true
    email?: true
    xHandle?: true
    web3ContentWork?: true
    commitment?: true
    helpNeeded?: true
    storyTellingVibe?: true
    userId?: true
    isApproved?: true
    following_team?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LaunchCampaignParticipantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaunchCampaignParticipants to aggregate.
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchCampaignParticipants to fetch.
     */
    orderBy?: LaunchCampaignParticipantsOrderByWithRelationInput | LaunchCampaignParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaunchCampaignParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchCampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchCampaignParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaunchCampaignParticipants
    **/
    _count?: true | LaunchCampaignParticipantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaunchCampaignParticipantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaunchCampaignParticipantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaunchCampaignParticipantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaunchCampaignParticipantsMaxAggregateInputType
  }

  export type GetLaunchCampaignParticipantsAggregateType<T extends LaunchCampaignParticipantsAggregateArgs> = {
        [P in keyof T & keyof AggregateLaunchCampaignParticipants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaunchCampaignParticipants[P]>
      : GetScalarType<T[P], AggregateLaunchCampaignParticipants[P]>
  }




  export type LaunchCampaignParticipantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaunchCampaignParticipantsWhereInput
    orderBy?: LaunchCampaignParticipantsOrderByWithAggregationInput | LaunchCampaignParticipantsOrderByWithAggregationInput[]
    by: LaunchCampaignParticipantsScalarFieldEnum[] | LaunchCampaignParticipantsScalarFieldEnum
    having?: LaunchCampaignParticipantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaunchCampaignParticipantsCountAggregateInputType | true
    _avg?: LaunchCampaignParticipantsAvgAggregateInputType
    _sum?: LaunchCampaignParticipantsSumAggregateInputType
    _min?: LaunchCampaignParticipantsMinAggregateInputType
    _max?: LaunchCampaignParticipantsMaxAggregateInputType
  }

  export type LaunchCampaignParticipantsGroupByOutputType = {
    id: string
    fid: number
    username: string
    email: string
    xHandle: string
    web3ContentWork: $Enums.web3ContentWork
    commitment: boolean
    helpNeeded: string | null
    storyTellingVibe: string
    userId: string
    isApproved: boolean | null
    following_team: boolean
    createdAt: Date | null
    updatedAt: Date | null
    _count: LaunchCampaignParticipantsCountAggregateOutputType | null
    _avg: LaunchCampaignParticipantsAvgAggregateOutputType | null
    _sum: LaunchCampaignParticipantsSumAggregateOutputType | null
    _min: LaunchCampaignParticipantsMinAggregateOutputType | null
    _max: LaunchCampaignParticipantsMaxAggregateOutputType | null
  }

  type GetLaunchCampaignParticipantsGroupByPayload<T extends LaunchCampaignParticipantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaunchCampaignParticipantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaunchCampaignParticipantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaunchCampaignParticipantsGroupByOutputType[P]>
            : GetScalarType<T[P], LaunchCampaignParticipantsGroupByOutputType[P]>
        }
      >
    >


  export type LaunchCampaignParticipantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    username?: boolean
    email?: boolean
    xHandle?: boolean
    web3ContentWork?: boolean
    commitment?: boolean
    helpNeeded?: boolean
    storyTellingVibe?: boolean
    userId?: boolean
    isApproved?: boolean
    following_team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["launchCampaignParticipants"]>

  export type LaunchCampaignParticipantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    username?: boolean
    email?: boolean
    xHandle?: boolean
    web3ContentWork?: boolean
    commitment?: boolean
    helpNeeded?: boolean
    storyTellingVibe?: boolean
    userId?: boolean
    isApproved?: boolean
    following_team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["launchCampaignParticipants"]>

  export type LaunchCampaignParticipantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    username?: boolean
    email?: boolean
    xHandle?: boolean
    web3ContentWork?: boolean
    commitment?: boolean
    helpNeeded?: boolean
    storyTellingVibe?: boolean
    userId?: boolean
    isApproved?: boolean
    following_team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["launchCampaignParticipants"]>

  export type LaunchCampaignParticipantsSelectScalar = {
    id?: boolean
    fid?: boolean
    username?: boolean
    email?: boolean
    xHandle?: boolean
    web3ContentWork?: boolean
    commitment?: boolean
    helpNeeded?: boolean
    storyTellingVibe?: boolean
    userId?: boolean
    isApproved?: boolean
    following_team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LaunchCampaignParticipantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fid" | "username" | "email" | "xHandle" | "web3ContentWork" | "commitment" | "helpNeeded" | "storyTellingVibe" | "userId" | "isApproved" | "following_team" | "createdAt" | "updatedAt", ExtArgs["result"]["launchCampaignParticipants"]>

  export type $LaunchCampaignParticipantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaunchCampaignParticipants"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fid: number
      username: string
      email: string
      xHandle: string
      web3ContentWork: $Enums.web3ContentWork
      commitment: boolean
      helpNeeded: string | null
      storyTellingVibe: string
      userId: string
      isApproved: boolean | null
      following_team: boolean
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["launchCampaignParticipants"]>
    composites: {}
  }

  type LaunchCampaignParticipantsGetPayload<S extends boolean | null | undefined | LaunchCampaignParticipantsDefaultArgs> = $Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload, S>

  type LaunchCampaignParticipantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaunchCampaignParticipantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaunchCampaignParticipantsCountAggregateInputType | true
    }

  export interface LaunchCampaignParticipantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaunchCampaignParticipants'], meta: { name: 'LaunchCampaignParticipants' } }
    /**
     * Find zero or one LaunchCampaignParticipants that matches the filter.
     * @param {LaunchCampaignParticipantsFindUniqueArgs} args - Arguments to find a LaunchCampaignParticipants
     * @example
     * // Get one LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaunchCampaignParticipantsFindUniqueArgs>(args: SelectSubset<T, LaunchCampaignParticipantsFindUniqueArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LaunchCampaignParticipants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaunchCampaignParticipantsFindUniqueOrThrowArgs} args - Arguments to find a LaunchCampaignParticipants
     * @example
     * // Get one LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaunchCampaignParticipantsFindUniqueOrThrowArgs>(args: SelectSubset<T, LaunchCampaignParticipantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaunchCampaignParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsFindFirstArgs} args - Arguments to find a LaunchCampaignParticipants
     * @example
     * // Get one LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaunchCampaignParticipantsFindFirstArgs>(args?: SelectSubset<T, LaunchCampaignParticipantsFindFirstArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaunchCampaignParticipants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsFindFirstOrThrowArgs} args - Arguments to find a LaunchCampaignParticipants
     * @example
     * // Get one LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaunchCampaignParticipantsFindFirstOrThrowArgs>(args?: SelectSubset<T, LaunchCampaignParticipantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LaunchCampaignParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findMany()
     * 
     * // Get first 10 LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const launchCampaignParticipantsWithIdOnly = await prisma.launchCampaignParticipants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaunchCampaignParticipantsFindManyArgs>(args?: SelectSubset<T, LaunchCampaignParticipantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LaunchCampaignParticipants.
     * @param {LaunchCampaignParticipantsCreateArgs} args - Arguments to create a LaunchCampaignParticipants.
     * @example
     * // Create one LaunchCampaignParticipants
     * const LaunchCampaignParticipants = await prisma.launchCampaignParticipants.create({
     *   data: {
     *     // ... data to create a LaunchCampaignParticipants
     *   }
     * })
     * 
     */
    create<T extends LaunchCampaignParticipantsCreateArgs>(args: SelectSubset<T, LaunchCampaignParticipantsCreateArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LaunchCampaignParticipants.
     * @param {LaunchCampaignParticipantsCreateManyArgs} args - Arguments to create many LaunchCampaignParticipants.
     * @example
     * // Create many LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaunchCampaignParticipantsCreateManyArgs>(args?: SelectSubset<T, LaunchCampaignParticipantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaunchCampaignParticipants and returns the data saved in the database.
     * @param {LaunchCampaignParticipantsCreateManyAndReturnArgs} args - Arguments to create many LaunchCampaignParticipants.
     * @example
     * // Create many LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaunchCampaignParticipants and only return the `id`
     * const launchCampaignParticipantsWithIdOnly = await prisma.launchCampaignParticipants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaunchCampaignParticipantsCreateManyAndReturnArgs>(args?: SelectSubset<T, LaunchCampaignParticipantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LaunchCampaignParticipants.
     * @param {LaunchCampaignParticipantsDeleteArgs} args - Arguments to delete one LaunchCampaignParticipants.
     * @example
     * // Delete one LaunchCampaignParticipants
     * const LaunchCampaignParticipants = await prisma.launchCampaignParticipants.delete({
     *   where: {
     *     // ... filter to delete one LaunchCampaignParticipants
     *   }
     * })
     * 
     */
    delete<T extends LaunchCampaignParticipantsDeleteArgs>(args: SelectSubset<T, LaunchCampaignParticipantsDeleteArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LaunchCampaignParticipants.
     * @param {LaunchCampaignParticipantsUpdateArgs} args - Arguments to update one LaunchCampaignParticipants.
     * @example
     * // Update one LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaunchCampaignParticipantsUpdateArgs>(args: SelectSubset<T, LaunchCampaignParticipantsUpdateArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LaunchCampaignParticipants.
     * @param {LaunchCampaignParticipantsDeleteManyArgs} args - Arguments to filter LaunchCampaignParticipants to delete.
     * @example
     * // Delete a few LaunchCampaignParticipants
     * const { count } = await prisma.launchCampaignParticipants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaunchCampaignParticipantsDeleteManyArgs>(args?: SelectSubset<T, LaunchCampaignParticipantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaunchCampaignParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaunchCampaignParticipantsUpdateManyArgs>(args: SelectSubset<T, LaunchCampaignParticipantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaunchCampaignParticipants and returns the data updated in the database.
     * @param {LaunchCampaignParticipantsUpdateManyAndReturnArgs} args - Arguments to update many LaunchCampaignParticipants.
     * @example
     * // Update many LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaunchCampaignParticipants and only return the `id`
     * const launchCampaignParticipantsWithIdOnly = await prisma.launchCampaignParticipants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaunchCampaignParticipantsUpdateManyAndReturnArgs>(args: SelectSubset<T, LaunchCampaignParticipantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LaunchCampaignParticipants.
     * @param {LaunchCampaignParticipantsUpsertArgs} args - Arguments to update or create a LaunchCampaignParticipants.
     * @example
     * // Update or create a LaunchCampaignParticipants
     * const launchCampaignParticipants = await prisma.launchCampaignParticipants.upsert({
     *   create: {
     *     // ... data to create a LaunchCampaignParticipants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaunchCampaignParticipants we want to update
     *   }
     * })
     */
    upsert<T extends LaunchCampaignParticipantsUpsertArgs>(args: SelectSubset<T, LaunchCampaignParticipantsUpsertArgs<ExtArgs>>): Prisma__LaunchCampaignParticipantsClient<$Result.GetResult<Prisma.$LaunchCampaignParticipantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LaunchCampaignParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsCountArgs} args - Arguments to filter LaunchCampaignParticipants to count.
     * @example
     * // Count the number of LaunchCampaignParticipants
     * const count = await prisma.launchCampaignParticipants.count({
     *   where: {
     *     // ... the filter for the LaunchCampaignParticipants we want to count
     *   }
     * })
    **/
    count<T extends LaunchCampaignParticipantsCountArgs>(
      args?: Subset<T, LaunchCampaignParticipantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaunchCampaignParticipantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaunchCampaignParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaunchCampaignParticipantsAggregateArgs>(args: Subset<T, LaunchCampaignParticipantsAggregateArgs>): Prisma.PrismaPromise<GetLaunchCampaignParticipantsAggregateType<T>>

    /**
     * Group by LaunchCampaignParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaunchCampaignParticipantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaunchCampaignParticipantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaunchCampaignParticipantsGroupByArgs['orderBy'] }
        : { orderBy?: LaunchCampaignParticipantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaunchCampaignParticipantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaunchCampaignParticipantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaunchCampaignParticipants model
   */
  readonly fields: LaunchCampaignParticipantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaunchCampaignParticipants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaunchCampaignParticipantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaunchCampaignParticipants model
   */
  interface LaunchCampaignParticipantsFieldRefs {
    readonly id: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly fid: FieldRef<"LaunchCampaignParticipants", 'Int'>
    readonly username: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly email: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly xHandle: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly web3ContentWork: FieldRef<"LaunchCampaignParticipants", 'web3ContentWork'>
    readonly commitment: FieldRef<"LaunchCampaignParticipants", 'Boolean'>
    readonly helpNeeded: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly storyTellingVibe: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly userId: FieldRef<"LaunchCampaignParticipants", 'String'>
    readonly isApproved: FieldRef<"LaunchCampaignParticipants", 'Boolean'>
    readonly following_team: FieldRef<"LaunchCampaignParticipants", 'Boolean'>
    readonly createdAt: FieldRef<"LaunchCampaignParticipants", 'DateTime'>
    readonly updatedAt: FieldRef<"LaunchCampaignParticipants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LaunchCampaignParticipants findUnique
   */
  export type LaunchCampaignParticipantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * Filter, which LaunchCampaignParticipants to fetch.
     */
    where: LaunchCampaignParticipantsWhereUniqueInput
  }

  /**
   * LaunchCampaignParticipants findUniqueOrThrow
   */
  export type LaunchCampaignParticipantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * Filter, which LaunchCampaignParticipants to fetch.
     */
    where: LaunchCampaignParticipantsWhereUniqueInput
  }

  /**
   * LaunchCampaignParticipants findFirst
   */
  export type LaunchCampaignParticipantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * Filter, which LaunchCampaignParticipants to fetch.
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchCampaignParticipants to fetch.
     */
    orderBy?: LaunchCampaignParticipantsOrderByWithRelationInput | LaunchCampaignParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaunchCampaignParticipants.
     */
    cursor?: LaunchCampaignParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchCampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchCampaignParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaunchCampaignParticipants.
     */
    distinct?: LaunchCampaignParticipantsScalarFieldEnum | LaunchCampaignParticipantsScalarFieldEnum[]
  }

  /**
   * LaunchCampaignParticipants findFirstOrThrow
   */
  export type LaunchCampaignParticipantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * Filter, which LaunchCampaignParticipants to fetch.
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchCampaignParticipants to fetch.
     */
    orderBy?: LaunchCampaignParticipantsOrderByWithRelationInput | LaunchCampaignParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaunchCampaignParticipants.
     */
    cursor?: LaunchCampaignParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchCampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchCampaignParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaunchCampaignParticipants.
     */
    distinct?: LaunchCampaignParticipantsScalarFieldEnum | LaunchCampaignParticipantsScalarFieldEnum[]
  }

  /**
   * LaunchCampaignParticipants findMany
   */
  export type LaunchCampaignParticipantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * Filter, which LaunchCampaignParticipants to fetch.
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaunchCampaignParticipants to fetch.
     */
    orderBy?: LaunchCampaignParticipantsOrderByWithRelationInput | LaunchCampaignParticipantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaunchCampaignParticipants.
     */
    cursor?: LaunchCampaignParticipantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaunchCampaignParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaunchCampaignParticipants.
     */
    skip?: number
    distinct?: LaunchCampaignParticipantsScalarFieldEnum | LaunchCampaignParticipantsScalarFieldEnum[]
  }

  /**
   * LaunchCampaignParticipants create
   */
  export type LaunchCampaignParticipantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * The data needed to create a LaunchCampaignParticipants.
     */
    data: XOR<LaunchCampaignParticipantsCreateInput, LaunchCampaignParticipantsUncheckedCreateInput>
  }

  /**
   * LaunchCampaignParticipants createMany
   */
  export type LaunchCampaignParticipantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaunchCampaignParticipants.
     */
    data: LaunchCampaignParticipantsCreateManyInput | LaunchCampaignParticipantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaunchCampaignParticipants createManyAndReturn
   */
  export type LaunchCampaignParticipantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * The data used to create many LaunchCampaignParticipants.
     */
    data: LaunchCampaignParticipantsCreateManyInput | LaunchCampaignParticipantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaunchCampaignParticipants update
   */
  export type LaunchCampaignParticipantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * The data needed to update a LaunchCampaignParticipants.
     */
    data: XOR<LaunchCampaignParticipantsUpdateInput, LaunchCampaignParticipantsUncheckedUpdateInput>
    /**
     * Choose, which LaunchCampaignParticipants to update.
     */
    where: LaunchCampaignParticipantsWhereUniqueInput
  }

  /**
   * LaunchCampaignParticipants updateMany
   */
  export type LaunchCampaignParticipantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaunchCampaignParticipants.
     */
    data: XOR<LaunchCampaignParticipantsUpdateManyMutationInput, LaunchCampaignParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which LaunchCampaignParticipants to update
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * Limit how many LaunchCampaignParticipants to update.
     */
    limit?: number
  }

  /**
   * LaunchCampaignParticipants updateManyAndReturn
   */
  export type LaunchCampaignParticipantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * The data used to update LaunchCampaignParticipants.
     */
    data: XOR<LaunchCampaignParticipantsUpdateManyMutationInput, LaunchCampaignParticipantsUncheckedUpdateManyInput>
    /**
     * Filter which LaunchCampaignParticipants to update
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * Limit how many LaunchCampaignParticipants to update.
     */
    limit?: number
  }

  /**
   * LaunchCampaignParticipants upsert
   */
  export type LaunchCampaignParticipantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * The filter to search for the LaunchCampaignParticipants to update in case it exists.
     */
    where: LaunchCampaignParticipantsWhereUniqueInput
    /**
     * In case the LaunchCampaignParticipants found by the `where` argument doesn't exist, create a new LaunchCampaignParticipants with this data.
     */
    create: XOR<LaunchCampaignParticipantsCreateInput, LaunchCampaignParticipantsUncheckedCreateInput>
    /**
     * In case the LaunchCampaignParticipants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaunchCampaignParticipantsUpdateInput, LaunchCampaignParticipantsUncheckedUpdateInput>
  }

  /**
   * LaunchCampaignParticipants delete
   */
  export type LaunchCampaignParticipantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
    /**
     * Filter which LaunchCampaignParticipants to delete.
     */
    where: LaunchCampaignParticipantsWhereUniqueInput
  }

  /**
   * LaunchCampaignParticipants deleteMany
   */
  export type LaunchCampaignParticipantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaunchCampaignParticipants to delete
     */
    where?: LaunchCampaignParticipantsWhereInput
    /**
     * Limit how many LaunchCampaignParticipants to delete.
     */
    limit?: number
  }

  /**
   * LaunchCampaignParticipants without action
   */
  export type LaunchCampaignParticipantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaunchCampaignParticipants
     */
    select?: LaunchCampaignParticipantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaunchCampaignParticipants
     */
    omit?: LaunchCampaignParticipantsOmit<ExtArgs> | null
  }


  /**
   * Model Streak
   */

  export type AggregateStreak = {
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  export type StreakAvgAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type StreakSumAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type StreakMinAggregateOutputType = {
    id: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastParticipationDate: Date | null
    status: $Enums.StreakStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    userId: string | null
  }

  export type StreakMaxAggregateOutputType = {
    id: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastParticipationDate: Date | null
    status: $Enums.StreakStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    userId: string | null
  }

  export type StreakCountAggregateOutputType = {
    id: number
    currentStreak: number
    longestStreak: number
    lastParticipationDate: number
    status: number
    createdAt: number
    updatedAt: number
    campaignId: number
    userId: number
    _all: number
  }


  export type StreakAvgAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type StreakSumAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type StreakMinAggregateInputType = {
    id?: true
    currentStreak?: true
    longestStreak?: true
    lastParticipationDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    userId?: true
  }

  export type StreakMaxAggregateInputType = {
    id?: true
    currentStreak?: true
    longestStreak?: true
    lastParticipationDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    userId?: true
  }

  export type StreakCountAggregateInputType = {
    id?: true
    currentStreak?: true
    longestStreak?: true
    lastParticipationDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    userId?: true
    _all?: true
  }

  export type StreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streak to aggregate.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streaks
    **/
    _count?: true | StreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreakMaxAggregateInputType
  }

  export type GetStreakAggregateType<T extends StreakAggregateArgs> = {
        [P in keyof T & keyof AggregateStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreak[P]>
      : GetScalarType<T[P], AggregateStreak[P]>
  }




  export type StreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithAggregationInput | StreakOrderByWithAggregationInput[]
    by: StreakScalarFieldEnum[] | StreakScalarFieldEnum
    having?: StreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreakCountAggregateInputType | true
    _avg?: StreakAvgAggregateInputType
    _sum?: StreakSumAggregateInputType
    _min?: StreakMinAggregateInputType
    _max?: StreakMaxAggregateInputType
  }

  export type StreakGroupByOutputType = {
    id: string
    currentStreak: number
    longestStreak: number
    lastParticipationDate: Date | null
    status: $Enums.StreakStatus
    createdAt: Date
    updatedAt: Date
    campaignId: string
    userId: string
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  type GetStreakGroupByPayload<T extends StreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreakGroupByOutputType[P]>
            : GetScalarType<T[P], StreakGroupByOutputType[P]>
        }
      >
    >


  export type StreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastParticipationDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastParticipationDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastParticipationDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectScalar = {
    id?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastParticipationDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
  }

  export type StreakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currentStreak" | "longestStreak" | "lastParticipationDate" | "status" | "createdAt" | "updatedAt" | "campaignId" | "userId", ExtArgs["result"]["streak"]>
  export type StreakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreakIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreakIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streak"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currentStreak: number
      longestStreak: number
      lastParticipationDate: Date | null
      status: $Enums.StreakStatus
      createdAt: Date
      updatedAt: Date
      campaignId: string
      userId: string
    }, ExtArgs["result"]["streak"]>
    composites: {}
  }

  type StreakGetPayload<S extends boolean | null | undefined | StreakDefaultArgs> = $Result.GetResult<Prisma.$StreakPayload, S>

  type StreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreakCountAggregateInputType | true
    }

  export interface StreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streak'], meta: { name: 'Streak' } }
    /**
     * Find zero or one Streak that matches the filter.
     * @param {StreakFindUniqueArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreakFindUniqueArgs>(args: SelectSubset<T, StreakFindUniqueArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreakFindUniqueOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreakFindUniqueOrThrowArgs>(args: SelectSubset<T, StreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreakFindFirstArgs>(args?: SelectSubset<T, StreakFindFirstArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreakFindFirstOrThrowArgs>(args?: SelectSubset<T, StreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streaks
     * const streaks = await prisma.streak.findMany()
     * 
     * // Get first 10 Streaks
     * const streaks = await prisma.streak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streakWithIdOnly = await prisma.streak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreakFindManyArgs>(args?: SelectSubset<T, StreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streak.
     * @param {StreakCreateArgs} args - Arguments to create a Streak.
     * @example
     * // Create one Streak
     * const Streak = await prisma.streak.create({
     *   data: {
     *     // ... data to create a Streak
     *   }
     * })
     * 
     */
    create<T extends StreakCreateArgs>(args: SelectSubset<T, StreakCreateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streaks.
     * @param {StreakCreateManyArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreakCreateManyArgs>(args?: SelectSubset<T, StreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streaks and returns the data saved in the database.
     * @param {StreakCreateManyAndReturnArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreakCreateManyAndReturnArgs>(args?: SelectSubset<T, StreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streak.
     * @param {StreakDeleteArgs} args - Arguments to delete one Streak.
     * @example
     * // Delete one Streak
     * const Streak = await prisma.streak.delete({
     *   where: {
     *     // ... filter to delete one Streak
     *   }
     * })
     * 
     */
    delete<T extends StreakDeleteArgs>(args: SelectSubset<T, StreakDeleteArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streak.
     * @param {StreakUpdateArgs} args - Arguments to update one Streak.
     * @example
     * // Update one Streak
     * const streak = await prisma.streak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreakUpdateArgs>(args: SelectSubset<T, StreakUpdateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streaks.
     * @param {StreakDeleteManyArgs} args - Arguments to filter Streaks to delete.
     * @example
     * // Delete a few Streaks
     * const { count } = await prisma.streak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreakDeleteManyArgs>(args?: SelectSubset<T, StreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreakUpdateManyArgs>(args: SelectSubset<T, StreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks and returns the data updated in the database.
     * @param {StreakUpdateManyAndReturnArgs} args - Arguments to update many Streaks.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreakUpdateManyAndReturnArgs>(args: SelectSubset<T, StreakUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streak.
     * @param {StreakUpsertArgs} args - Arguments to update or create a Streak.
     * @example
     * // Update or create a Streak
     * const streak = await prisma.streak.upsert({
     *   create: {
     *     // ... data to create a Streak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streak we want to update
     *   }
     * })
     */
    upsert<T extends StreakUpsertArgs>(args: SelectSubset<T, StreakUpsertArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakCountArgs} args - Arguments to filter Streaks to count.
     * @example
     * // Count the number of Streaks
     * const count = await prisma.streak.count({
     *   where: {
     *     // ... the filter for the Streaks we want to count
     *   }
     * })
    **/
    count<T extends StreakCountArgs>(
      args?: Subset<T, StreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreakAggregateArgs>(args: Subset<T, StreakAggregateArgs>): Prisma.PrismaPromise<GetStreakAggregateType<T>>

    /**
     * Group by Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreakGroupByArgs['orderBy'] }
        : { orderBy?: StreakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streak model
   */
  readonly fields: StreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Streak model
   */
  interface StreakFieldRefs {
    readonly id: FieldRef<"Streak", 'String'>
    readonly currentStreak: FieldRef<"Streak", 'Int'>
    readonly longestStreak: FieldRef<"Streak", 'Int'>
    readonly lastParticipationDate: FieldRef<"Streak", 'DateTime'>
    readonly status: FieldRef<"Streak", 'StreakStatus'>
    readonly createdAt: FieldRef<"Streak", 'DateTime'>
    readonly updatedAt: FieldRef<"Streak", 'DateTime'>
    readonly campaignId: FieldRef<"Streak", 'String'>
    readonly userId: FieldRef<"Streak", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Streak findUnique
   */
  export type StreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findUniqueOrThrow
   */
  export type StreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findFirst
   */
  export type StreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findFirstOrThrow
   */
  export type StreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findMany
   */
  export type StreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter, which Streaks to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak create
   */
  export type StreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to create a Streak.
     */
    data: XOR<StreakCreateInput, StreakUncheckedCreateInput>
  }

  /**
   * Streak createMany
   */
  export type StreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streak createManyAndReturn
   */
  export type StreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streak update
   */
  export type StreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The data needed to update a Streak.
     */
    data: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
    /**
     * Choose, which Streak to update.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak updateMany
   */
  export type StreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
  }

  /**
   * Streak updateManyAndReturn
   */
  export type StreakUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streak upsert
   */
  export type StreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * The filter to search for the Streak to update in case it exists.
     */
    where: StreakWhereUniqueInput
    /**
     * In case the Streak found by the `where` argument doesn't exist, create a new Streak with this data.
     */
    create: XOR<StreakCreateInput, StreakUncheckedCreateInput>
    /**
     * In case the Streak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
  }

  /**
   * Streak delete
   */
  export type StreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
    /**
     * Filter which Streak to delete.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak deleteMany
   */
  export type StreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streaks to delete
     */
    where?: StreakWhereInput
    /**
     * Limit how many Streaks to delete.
     */
    limit?: number
  }

  /**
   * Streak without action
   */
  export type StreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streak
     */
    omit?: StreakOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreakInclude<ExtArgs> | null
  }


  /**
   * Model Participation
   */

  export type AggregateParticipation = {
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  export type ParticipationAvgAggregateOutputType = {
    weekNumber: number | null
  }

  export type ParticipationSumAggregateOutputType = {
    weekNumber: number | null
  }

  export type ParticipationMinAggregateOutputType = {
    id: string | null
    contentTitle: string | null
    contentUrl: string | null
    contentHash: string | null
    description: string | null
    onchainTxHash: string | null
    isVerified: boolean | null
    submissionDate: Date | null
    weekNumber: number | null
    status: $Enums.ParticipationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    userId: string | null
  }

  export type ParticipationMaxAggregateOutputType = {
    id: string | null
    contentTitle: string | null
    contentUrl: string | null
    contentHash: string | null
    description: string | null
    onchainTxHash: string | null
    isVerified: boolean | null
    submissionDate: Date | null
    weekNumber: number | null
    status: $Enums.ParticipationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    userId: string | null
  }

  export type ParticipationCountAggregateOutputType = {
    id: number
    contentTitle: number
    contentUrl: number
    contentHash: number
    description: number
    onchainTxHash: number
    isVerified: number
    submissionDate: number
    weekNumber: number
    status: number
    createdAt: number
    updatedAt: number
    campaignId: number
    userId: number
    _all: number
  }


  export type ParticipationAvgAggregateInputType = {
    weekNumber?: true
  }

  export type ParticipationSumAggregateInputType = {
    weekNumber?: true
  }

  export type ParticipationMinAggregateInputType = {
    id?: true
    contentTitle?: true
    contentUrl?: true
    contentHash?: true
    description?: true
    onchainTxHash?: true
    isVerified?: true
    submissionDate?: true
    weekNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    userId?: true
  }

  export type ParticipationMaxAggregateInputType = {
    id?: true
    contentTitle?: true
    contentUrl?: true
    contentHash?: true
    description?: true
    onchainTxHash?: true
    isVerified?: true
    submissionDate?: true
    weekNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    userId?: true
  }

  export type ParticipationCountAggregateInputType = {
    id?: true
    contentTitle?: true
    contentUrl?: true
    contentHash?: true
    description?: true
    onchainTxHash?: true
    isVerified?: true
    submissionDate?: true
    weekNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    userId?: true
    _all?: true
  }

  export type ParticipationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participation to aggregate.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participations
    **/
    _count?: true | ParticipationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationMaxAggregateInputType
  }

  export type GetParticipationAggregateType<T extends ParticipationAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipation[P]>
      : GetScalarType<T[P], AggregateParticipation[P]>
  }




  export type ParticipationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithAggregationInput | ParticipationOrderByWithAggregationInput[]
    by: ParticipationScalarFieldEnum[] | ParticipationScalarFieldEnum
    having?: ParticipationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationCountAggregateInputType | true
    _avg?: ParticipationAvgAggregateInputType
    _sum?: ParticipationSumAggregateInputType
    _min?: ParticipationMinAggregateInputType
    _max?: ParticipationMaxAggregateInputType
  }

  export type ParticipationGroupByOutputType = {
    id: string
    contentTitle: string
    contentUrl: string | null
    contentHash: string
    description: string | null
    onchainTxHash: string | null
    isVerified: boolean
    submissionDate: Date
    weekNumber: number
    status: $Enums.ParticipationStatus
    createdAt: Date
    updatedAt: Date
    campaignId: string
    userId: string
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  type GetParticipationGroupByPayload<T extends ParticipationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
        }
      >
    >


  export type ParticipationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentTitle?: boolean
    contentUrl?: boolean
    contentHash?: boolean
    description?: boolean
    onchainTxHash?: boolean
    isVerified?: boolean
    submissionDate?: boolean
    weekNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentTitle?: boolean
    contentUrl?: boolean
    contentHash?: boolean
    description?: boolean
    onchainTxHash?: boolean
    isVerified?: boolean
    submissionDate?: boolean
    weekNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentTitle?: boolean
    contentUrl?: boolean
    contentHash?: boolean
    description?: boolean
    onchainTxHash?: boolean
    isVerified?: boolean
    submissionDate?: boolean
    weekNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectScalar = {
    id?: boolean
    contentTitle?: boolean
    contentUrl?: boolean
    contentHash?: boolean
    description?: boolean
    onchainTxHash?: boolean
    isVerified?: boolean
    submissionDate?: boolean
    weekNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    userId?: boolean
  }

  export type ParticipationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentTitle" | "contentUrl" | "contentHash" | "description" | "onchainTxHash" | "isVerified" | "submissionDate" | "weekNumber" | "status" | "createdAt" | "updatedAt" | "campaignId" | "userId", ExtArgs["result"]["participation"]>
  export type ParticipationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participation"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentTitle: string
      contentUrl: string | null
      contentHash: string
      description: string | null
      onchainTxHash: string | null
      isVerified: boolean
      submissionDate: Date
      weekNumber: number
      status: $Enums.ParticipationStatus
      createdAt: Date
      updatedAt: Date
      campaignId: string
      userId: string
    }, ExtArgs["result"]["participation"]>
    composites: {}
  }

  type ParticipationGetPayload<S extends boolean | null | undefined | ParticipationDefaultArgs> = $Result.GetResult<Prisma.$ParticipationPayload, S>

  type ParticipationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipationCountAggregateInputType | true
    }

  export interface ParticipationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participation'], meta: { name: 'Participation' } }
    /**
     * Find zero or one Participation that matches the filter.
     * @param {ParticipationFindUniqueArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipationFindUniqueArgs>(args: SelectSubset<T, ParticipationFindUniqueArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipationFindUniqueOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipationFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipationFindFirstArgs>(args?: SelectSubset<T, ParticipationFindFirstArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipationFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participations
     * const participations = await prisma.participation.findMany()
     * 
     * // Get first 10 Participations
     * const participations = await prisma.participation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participationWithIdOnly = await prisma.participation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipationFindManyArgs>(args?: SelectSubset<T, ParticipationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participation.
     * @param {ParticipationCreateArgs} args - Arguments to create a Participation.
     * @example
     * // Create one Participation
     * const Participation = await prisma.participation.create({
     *   data: {
     *     // ... data to create a Participation
     *   }
     * })
     * 
     */
    create<T extends ParticipationCreateArgs>(args: SelectSubset<T, ParticipationCreateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participations.
     * @param {ParticipationCreateManyArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipationCreateManyArgs>(args?: SelectSubset<T, ParticipationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participations and returns the data saved in the database.
     * @param {ParticipationCreateManyAndReturnArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipationCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participation.
     * @param {ParticipationDeleteArgs} args - Arguments to delete one Participation.
     * @example
     * // Delete one Participation
     * const Participation = await prisma.participation.delete({
     *   where: {
     *     // ... filter to delete one Participation
     *   }
     * })
     * 
     */
    delete<T extends ParticipationDeleteArgs>(args: SelectSubset<T, ParticipationDeleteArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participation.
     * @param {ParticipationUpdateArgs} args - Arguments to update one Participation.
     * @example
     * // Update one Participation
     * const participation = await prisma.participation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipationUpdateArgs>(args: SelectSubset<T, ParticipationUpdateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participations.
     * @param {ParticipationDeleteManyArgs} args - Arguments to filter Participations to delete.
     * @example
     * // Delete a few Participations
     * const { count } = await prisma.participation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipationDeleteManyArgs>(args?: SelectSubset<T, ParticipationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipationUpdateManyArgs>(args: SelectSubset<T, ParticipationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations and returns the data updated in the database.
     * @param {ParticipationUpdateManyAndReturnArgs} args - Arguments to update many Participations.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipationUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participation.
     * @param {ParticipationUpsertArgs} args - Arguments to update or create a Participation.
     * @example
     * // Update or create a Participation
     * const participation = await prisma.participation.upsert({
     *   create: {
     *     // ... data to create a Participation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participation we want to update
     *   }
     * })
     */
    upsert<T extends ParticipationUpsertArgs>(args: SelectSubset<T, ParticipationUpsertArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationCountArgs} args - Arguments to filter Participations to count.
     * @example
     * // Count the number of Participations
     * const count = await prisma.participation.count({
     *   where: {
     *     // ... the filter for the Participations we want to count
     *   }
     * })
    **/
    count<T extends ParticipationCountArgs>(
      args?: Subset<T, ParticipationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipationAggregateArgs>(args: Subset<T, ParticipationAggregateArgs>): Prisma.PrismaPromise<GetParticipationAggregateType<T>>

    /**
     * Group by Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipationGroupByArgs['orderBy'] }
        : { orderBy?: ParticipationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participation model
   */
  readonly fields: ParticipationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participation model
   */
  interface ParticipationFieldRefs {
    readonly id: FieldRef<"Participation", 'String'>
    readonly contentTitle: FieldRef<"Participation", 'String'>
    readonly contentUrl: FieldRef<"Participation", 'String'>
    readonly contentHash: FieldRef<"Participation", 'String'>
    readonly description: FieldRef<"Participation", 'String'>
    readonly onchainTxHash: FieldRef<"Participation", 'String'>
    readonly isVerified: FieldRef<"Participation", 'Boolean'>
    readonly submissionDate: FieldRef<"Participation", 'DateTime'>
    readonly weekNumber: FieldRef<"Participation", 'Int'>
    readonly status: FieldRef<"Participation", 'ParticipationStatus'>
    readonly createdAt: FieldRef<"Participation", 'DateTime'>
    readonly updatedAt: FieldRef<"Participation", 'DateTime'>
    readonly campaignId: FieldRef<"Participation", 'String'>
    readonly userId: FieldRef<"Participation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Participation findUnique
   */
  export type ParticipationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findUniqueOrThrow
   */
  export type ParticipationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findFirst
   */
  export type ParticipationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findFirstOrThrow
   */
  export type ParticipationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findMany
   */
  export type ParticipationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participations to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation create
   */
  export type ParticipationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The data needed to create a Participation.
     */
    data: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
  }

  /**
   * Participation createMany
   */
  export type ParticipationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participation createManyAndReturn
   */
  export type ParticipationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participation update
   */
  export type ParticipationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The data needed to update a Participation.
     */
    data: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
    /**
     * Choose, which Participation to update.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation updateMany
   */
  export type ParticipationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to update.
     */
    limit?: number
  }

  /**
   * Participation updateManyAndReturn
   */
  export type ParticipationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participation upsert
   */
  export type ParticipationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The filter to search for the Participation to update in case it exists.
     */
    where: ParticipationWhereUniqueInput
    /**
     * In case the Participation found by the `where` argument doesn't exist, create a new Participation with this data.
     */
    create: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
    /**
     * In case the Participation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
  }

  /**
   * Participation delete
   */
  export type ParticipationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter which Participation to delete.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation deleteMany
   */
  export type ParticipationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participations to delete
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to delete.
     */
    limit?: number
  }

  /**
   * Participation without action
   */
  export type ParticipationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
  }


  /**
   * Model CampaignPayment
   */

  export type AggregateCampaignPayment = {
    _count: CampaignPaymentCountAggregateOutputType | null
    _avg: CampaignPaymentAvgAggregateOutputType | null
    _sum: CampaignPaymentSumAggregateOutputType | null
    _min: CampaignPaymentMinAggregateOutputType | null
    _max: CampaignPaymentMaxAggregateOutputType | null
  }

  export type CampaignPaymentAvgAggregateOutputType = {
    amount: Decimal | null
    blockNumber: number | null
    gasUsed: number | null
  }

  export type CampaignPaymentSumAggregateOutputType = {
    amount: Decimal | null
    blockNumber: number | null
    gasUsed: number | null
  }

  export type CampaignPaymentMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    currency: string | null
    txHash: string | null
    blockNumber: number | null
    gasUsed: number | null
    gasPrice: string | null
    status: $Enums.PaymentStatus | null
    recipientAddress: string | null
    verificationHash: string | null
    nonceUsed: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    payerId: string | null
  }

  export type CampaignPaymentMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    currency: string | null
    txHash: string | null
    blockNumber: number | null
    gasUsed: number | null
    gasPrice: string | null
    status: $Enums.PaymentStatus | null
    recipientAddress: string | null
    verificationHash: string | null
    nonceUsed: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    payerId: string | null
  }

  export type CampaignPaymentCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    txHash: number
    blockNumber: number
    gasUsed: number
    gasPrice: number
    status: number
    recipientAddress: number
    verificationHash: number
    nonceUsed: number
    createdAt: number
    updatedAt: number
    campaignId: number
    payerId: number
    _all: number
  }


  export type CampaignPaymentAvgAggregateInputType = {
    amount?: true
    blockNumber?: true
    gasUsed?: true
  }

  export type CampaignPaymentSumAggregateInputType = {
    amount?: true
    blockNumber?: true
    gasUsed?: true
  }

  export type CampaignPaymentMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    txHash?: true
    blockNumber?: true
    gasUsed?: true
    gasPrice?: true
    status?: true
    recipientAddress?: true
    verificationHash?: true
    nonceUsed?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    payerId?: true
  }

  export type CampaignPaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    txHash?: true
    blockNumber?: true
    gasUsed?: true
    gasPrice?: true
    status?: true
    recipientAddress?: true
    verificationHash?: true
    nonceUsed?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    payerId?: true
  }

  export type CampaignPaymentCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    txHash?: true
    blockNumber?: true
    gasUsed?: true
    gasPrice?: true
    status?: true
    recipientAddress?: true
    verificationHash?: true
    nonceUsed?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    payerId?: true
    _all?: true
  }

  export type CampaignPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignPayment to aggregate.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignPayments
    **/
    _count?: true | CampaignPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignPaymentMaxAggregateInputType
  }

  export type GetCampaignPaymentAggregateType<T extends CampaignPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignPayment[P]>
      : GetScalarType<T[P], AggregateCampaignPayment[P]>
  }




  export type CampaignPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignPaymentWhereInput
    orderBy?: CampaignPaymentOrderByWithAggregationInput | CampaignPaymentOrderByWithAggregationInput[]
    by: CampaignPaymentScalarFieldEnum[] | CampaignPaymentScalarFieldEnum
    having?: CampaignPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignPaymentCountAggregateInputType | true
    _avg?: CampaignPaymentAvgAggregateInputType
    _sum?: CampaignPaymentSumAggregateInputType
    _min?: CampaignPaymentMinAggregateInputType
    _max?: CampaignPaymentMaxAggregateInputType
  }

  export type CampaignPaymentGroupByOutputType = {
    id: string
    amount: Decimal
    currency: string
    txHash: string
    blockNumber: number | null
    gasUsed: number | null
    gasPrice: string | null
    status: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash: string | null
    nonceUsed: string | null
    createdAt: Date
    updatedAt: Date
    campaignId: string
    payerId: string
    _count: CampaignPaymentCountAggregateOutputType | null
    _avg: CampaignPaymentAvgAggregateOutputType | null
    _sum: CampaignPaymentSumAggregateOutputType | null
    _min: CampaignPaymentMinAggregateOutputType | null
    _max: CampaignPaymentMaxAggregateOutputType | null
  }

  type GetCampaignPaymentGroupByPayload<T extends CampaignPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignPaymentGroupByOutputType[P]>
        }
      >
    >


  export type CampaignPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    recipientAddress?: boolean
    verificationHash?: boolean
    nonceUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    payerId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPayment"]>

  export type CampaignPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    recipientAddress?: boolean
    verificationHash?: boolean
    nonceUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    payerId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPayment"]>

  export type CampaignPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    recipientAddress?: boolean
    verificationHash?: boolean
    nonceUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    payerId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignPayment"]>

  export type CampaignPaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    recipientAddress?: boolean
    verificationHash?: boolean
    nonceUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    payerId?: boolean
  }

  export type CampaignPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "currency" | "txHash" | "blockNumber" | "gasUsed" | "gasPrice" | "status" | "recipientAddress" | "verificationHash" | "nonceUsed" | "createdAt" | "updatedAt" | "campaignId" | "payerId", ExtArgs["result"]["campaignPayment"]>
  export type CampaignPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignPayment"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      payer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      currency: string
      txHash: string
      blockNumber: number | null
      gasUsed: number | null
      gasPrice: string | null
      status: $Enums.PaymentStatus
      recipientAddress: string
      verificationHash: string | null
      nonceUsed: string | null
      createdAt: Date
      updatedAt: Date
      campaignId: string
      payerId: string
    }, ExtArgs["result"]["campaignPayment"]>
    composites: {}
  }

  type CampaignPaymentGetPayload<S extends boolean | null | undefined | CampaignPaymentDefaultArgs> = $Result.GetResult<Prisma.$CampaignPaymentPayload, S>

  type CampaignPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignPaymentCountAggregateInputType | true
    }

  export interface CampaignPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignPayment'], meta: { name: 'CampaignPayment' } }
    /**
     * Find zero or one CampaignPayment that matches the filter.
     * @param {CampaignPaymentFindUniqueArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignPaymentFindUniqueArgs>(args: SelectSubset<T, CampaignPaymentFindUniqueArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignPaymentFindUniqueOrThrowArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentFindFirstArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignPaymentFindFirstArgs>(args?: SelectSubset<T, CampaignPaymentFindFirstArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentFindFirstOrThrowArgs} args - Arguments to find a CampaignPayment
     * @example
     * // Get one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignPayments
     * const campaignPayments = await prisma.campaignPayment.findMany()
     * 
     * // Get first 10 CampaignPayments
     * const campaignPayments = await prisma.campaignPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignPaymentWithIdOnly = await prisma.campaignPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignPaymentFindManyArgs>(args?: SelectSubset<T, CampaignPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignPayment.
     * @param {CampaignPaymentCreateArgs} args - Arguments to create a CampaignPayment.
     * @example
     * // Create one CampaignPayment
     * const CampaignPayment = await prisma.campaignPayment.create({
     *   data: {
     *     // ... data to create a CampaignPayment
     *   }
     * })
     * 
     */
    create<T extends CampaignPaymentCreateArgs>(args: SelectSubset<T, CampaignPaymentCreateArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignPayments.
     * @param {CampaignPaymentCreateManyArgs} args - Arguments to create many CampaignPayments.
     * @example
     * // Create many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignPaymentCreateManyArgs>(args?: SelectSubset<T, CampaignPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignPayments and returns the data saved in the database.
     * @param {CampaignPaymentCreateManyAndReturnArgs} args - Arguments to create many CampaignPayments.
     * @example
     * // Create many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignPayments and only return the `id`
     * const campaignPaymentWithIdOnly = await prisma.campaignPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignPayment.
     * @param {CampaignPaymentDeleteArgs} args - Arguments to delete one CampaignPayment.
     * @example
     * // Delete one CampaignPayment
     * const CampaignPayment = await prisma.campaignPayment.delete({
     *   where: {
     *     // ... filter to delete one CampaignPayment
     *   }
     * })
     * 
     */
    delete<T extends CampaignPaymentDeleteArgs>(args: SelectSubset<T, CampaignPaymentDeleteArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignPayment.
     * @param {CampaignPaymentUpdateArgs} args - Arguments to update one CampaignPayment.
     * @example
     * // Update one CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignPaymentUpdateArgs>(args: SelectSubset<T, CampaignPaymentUpdateArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignPayments.
     * @param {CampaignPaymentDeleteManyArgs} args - Arguments to filter CampaignPayments to delete.
     * @example
     * // Delete a few CampaignPayments
     * const { count } = await prisma.campaignPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignPaymentDeleteManyArgs>(args?: SelectSubset<T, CampaignPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignPaymentUpdateManyArgs>(args: SelectSubset<T, CampaignPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignPayments and returns the data updated in the database.
     * @param {CampaignPaymentUpdateManyAndReturnArgs} args - Arguments to update many CampaignPayments.
     * @example
     * // Update many CampaignPayments
     * const campaignPayment = await prisma.campaignPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignPayments and only return the `id`
     * const campaignPaymentWithIdOnly = await prisma.campaignPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignPayment.
     * @param {CampaignPaymentUpsertArgs} args - Arguments to update or create a CampaignPayment.
     * @example
     * // Update or create a CampaignPayment
     * const campaignPayment = await prisma.campaignPayment.upsert({
     *   create: {
     *     // ... data to create a CampaignPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignPayment we want to update
     *   }
     * })
     */
    upsert<T extends CampaignPaymentUpsertArgs>(args: SelectSubset<T, CampaignPaymentUpsertArgs<ExtArgs>>): Prisma__CampaignPaymentClient<$Result.GetResult<Prisma.$CampaignPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentCountArgs} args - Arguments to filter CampaignPayments to count.
     * @example
     * // Count the number of CampaignPayments
     * const count = await prisma.campaignPayment.count({
     *   where: {
     *     // ... the filter for the CampaignPayments we want to count
     *   }
     * })
    **/
    count<T extends CampaignPaymentCountArgs>(
      args?: Subset<T, CampaignPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignPaymentAggregateArgs>(args: Subset<T, CampaignPaymentAggregateArgs>): Prisma.PrismaPromise<GetCampaignPaymentAggregateType<T>>

    /**
     * Group by CampaignPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignPaymentGroupByArgs['orderBy'] }
        : { orderBy?: CampaignPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignPayment model
   */
  readonly fields: CampaignPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignPayment model
   */
  interface CampaignPaymentFieldRefs {
    readonly id: FieldRef<"CampaignPayment", 'String'>
    readonly amount: FieldRef<"CampaignPayment", 'Decimal'>
    readonly currency: FieldRef<"CampaignPayment", 'String'>
    readonly txHash: FieldRef<"CampaignPayment", 'String'>
    readonly blockNumber: FieldRef<"CampaignPayment", 'Int'>
    readonly gasUsed: FieldRef<"CampaignPayment", 'Int'>
    readonly gasPrice: FieldRef<"CampaignPayment", 'String'>
    readonly status: FieldRef<"CampaignPayment", 'PaymentStatus'>
    readonly recipientAddress: FieldRef<"CampaignPayment", 'String'>
    readonly verificationHash: FieldRef<"CampaignPayment", 'String'>
    readonly nonceUsed: FieldRef<"CampaignPayment", 'String'>
    readonly createdAt: FieldRef<"CampaignPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignPayment", 'DateTime'>
    readonly campaignId: FieldRef<"CampaignPayment", 'String'>
    readonly payerId: FieldRef<"CampaignPayment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampaignPayment findUnique
   */
  export type CampaignPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment findUniqueOrThrow
   */
  export type CampaignPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment findFirst
   */
  export type CampaignPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignPayments.
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPayments.
     */
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * CampaignPayment findFirstOrThrow
   */
  export type CampaignPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayment to fetch.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignPayments.
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignPayments.
     */
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * CampaignPayment findMany
   */
  export type CampaignPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CampaignPayments to fetch.
     */
    where?: CampaignPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignPayments to fetch.
     */
    orderBy?: CampaignPaymentOrderByWithRelationInput | CampaignPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignPayments.
     */
    cursor?: CampaignPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignPayments.
     */
    skip?: number
    distinct?: CampaignPaymentScalarFieldEnum | CampaignPaymentScalarFieldEnum[]
  }

  /**
   * CampaignPayment create
   */
  export type CampaignPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignPayment.
     */
    data: XOR<CampaignPaymentCreateInput, CampaignPaymentUncheckedCreateInput>
  }

  /**
   * CampaignPayment createMany
   */
  export type CampaignPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignPayments.
     */
    data: CampaignPaymentCreateManyInput | CampaignPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignPayment createManyAndReturn
   */
  export type CampaignPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignPayments.
     */
    data: CampaignPaymentCreateManyInput | CampaignPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignPayment update
   */
  export type CampaignPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignPayment.
     */
    data: XOR<CampaignPaymentUpdateInput, CampaignPaymentUncheckedUpdateInput>
    /**
     * Choose, which CampaignPayment to update.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment updateMany
   */
  export type CampaignPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignPayments.
     */
    data: XOR<CampaignPaymentUpdateManyMutationInput, CampaignPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CampaignPayments to update
     */
    where?: CampaignPaymentWhereInput
    /**
     * Limit how many CampaignPayments to update.
     */
    limit?: number
  }

  /**
   * CampaignPayment updateManyAndReturn
   */
  export type CampaignPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * The data used to update CampaignPayments.
     */
    data: XOR<CampaignPaymentUpdateManyMutationInput, CampaignPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CampaignPayments to update
     */
    where?: CampaignPaymentWhereInput
    /**
     * Limit how many CampaignPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignPayment upsert
   */
  export type CampaignPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignPayment to update in case it exists.
     */
    where: CampaignPaymentWhereUniqueInput
    /**
     * In case the CampaignPayment found by the `where` argument doesn't exist, create a new CampaignPayment with this data.
     */
    create: XOR<CampaignPaymentCreateInput, CampaignPaymentUncheckedCreateInput>
    /**
     * In case the CampaignPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignPaymentUpdateInput, CampaignPaymentUncheckedUpdateInput>
  }

  /**
   * CampaignPayment delete
   */
  export type CampaignPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
    /**
     * Filter which CampaignPayment to delete.
     */
    where: CampaignPaymentWhereUniqueInput
  }

  /**
   * CampaignPayment deleteMany
   */
  export type CampaignPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignPayments to delete
     */
    where?: CampaignPaymentWhereInput
    /**
     * Limit how many CampaignPayments to delete.
     */
    limit?: number
  }

  /**
   * CampaignPayment without action
   */
  export type CampaignPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignPayment
     */
    select?: CampaignPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignPayment
     */
    omit?: CampaignPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    amount: Decimal | null
    blockNumber: number | null
    gasUsed: number | null
    creatorShare: Decimal | null
    winnerShare: Decimal | null
  }

  export type DonationSumAggregateOutputType = {
    amount: Decimal | null
    blockNumber: number | null
    gasUsed: number | null
    creatorShare: Decimal | null
    winnerShare: Decimal | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    currency: string | null
    message: string | null
    txHash: string | null
    blockNumber: number | null
    gasUsed: number | null
    gasPrice: string | null
    status: $Enums.PaymentStatus | null
    creatorShare: Decimal | null
    winnerShare: Decimal | null
    isDistributed: boolean | null
    distributionTxHash: string | null
    verificationHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    donorId: string | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    currency: string | null
    message: string | null
    txHash: string | null
    blockNumber: number | null
    gasUsed: number | null
    gasPrice: string | null
    status: $Enums.PaymentStatus | null
    creatorShare: Decimal | null
    winnerShare: Decimal | null
    isDistributed: boolean | null
    distributionTxHash: string | null
    verificationHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    campaignId: string | null
    donorId: string | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    message: number
    txHash: number
    blockNumber: number
    gasUsed: number
    gasPrice: number
    status: number
    creatorShare: number
    winnerShare: number
    isDistributed: number
    distributionTxHash: number
    verificationHash: number
    createdAt: number
    updatedAt: number
    campaignId: number
    donorId: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    amount?: true
    blockNumber?: true
    gasUsed?: true
    creatorShare?: true
    winnerShare?: true
  }

  export type DonationSumAggregateInputType = {
    amount?: true
    blockNumber?: true
    gasUsed?: true
    creatorShare?: true
    winnerShare?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    message?: true
    txHash?: true
    blockNumber?: true
    gasUsed?: true
    gasPrice?: true
    status?: true
    creatorShare?: true
    winnerShare?: true
    isDistributed?: true
    distributionTxHash?: true
    verificationHash?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    donorId?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    message?: true
    txHash?: true
    blockNumber?: true
    gasUsed?: true
    gasPrice?: true
    status?: true
    creatorShare?: true
    winnerShare?: true
    isDistributed?: true
    distributionTxHash?: true
    verificationHash?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    donorId?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    message?: true
    txHash?: true
    blockNumber?: true
    gasUsed?: true
    gasPrice?: true
    status?: true
    creatorShare?: true
    winnerShare?: true
    isDistributed?: true
    distributionTxHash?: true
    verificationHash?: true
    createdAt?: true
    updatedAt?: true
    campaignId?: true
    donorId?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    amount: Decimal
    currency: string
    message: string | null
    txHash: string
    blockNumber: number | null
    gasUsed: number | null
    gasPrice: string | null
    status: $Enums.PaymentStatus
    creatorShare: Decimal
    winnerShare: Decimal
    isDistributed: boolean
    distributionTxHash: string | null
    verificationHash: string | null
    createdAt: Date
    updatedAt: Date
    campaignId: string
    donorId: string
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    message?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    creatorShare?: boolean
    winnerShare?: boolean
    isDistributed?: boolean
    distributionTxHash?: boolean
    verificationHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    donorId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    message?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    creatorShare?: boolean
    winnerShare?: boolean
    isDistributed?: boolean
    distributionTxHash?: boolean
    verificationHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    donorId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    message?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    creatorShare?: boolean
    winnerShare?: boolean
    isDistributed?: boolean
    distributionTxHash?: boolean
    verificationHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    donorId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    message?: boolean
    txHash?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    gasPrice?: boolean
    status?: boolean
    creatorShare?: boolean
    winnerShare?: boolean
    isDistributed?: boolean
    distributionTxHash?: boolean
    verificationHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaignId?: boolean
    donorId?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "currency" | "message" | "txHash" | "blockNumber" | "gasUsed" | "gasPrice" | "status" | "creatorShare" | "winnerShare" | "isDistributed" | "distributionTxHash" | "verificationHash" | "createdAt" | "updatedAt" | "campaignId" | "donorId", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      donor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      currency: string
      message: string | null
      txHash: string
      blockNumber: number | null
      gasUsed: number | null
      gasPrice: string | null
      status: $Enums.PaymentStatus
      creatorShare: Prisma.Decimal
      winnerShare: Prisma.Decimal
      isDistributed: boolean
      distributionTxHash: string | null
      verificationHash: string | null
      createdAt: Date
      updatedAt: Date
      campaignId: string
      donorId: string
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'Decimal'>
    readonly currency: FieldRef<"Donation", 'String'>
    readonly message: FieldRef<"Donation", 'String'>
    readonly txHash: FieldRef<"Donation", 'String'>
    readonly blockNumber: FieldRef<"Donation", 'Int'>
    readonly gasUsed: FieldRef<"Donation", 'Int'>
    readonly gasPrice: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'PaymentStatus'>
    readonly creatorShare: FieldRef<"Donation", 'Decimal'>
    readonly winnerShare: FieldRef<"Donation", 'Decimal'>
    readonly isDistributed: FieldRef<"Donation", 'Boolean'>
    readonly distributionTxHash: FieldRef<"Donation", 'String'>
    readonly verificationHash: FieldRef<"Donation", 'String'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
    readonly campaignId: FieldRef<"Donation", 'String'>
    readonly donorId: FieldRef<"Donation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model SecurityEvent
   */

  export type AggregateSecurityEvent = {
    _count: SecurityEventCountAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  export type SecurityEventMinAggregateOutputType = {
    id: string | null
    eventType: $Enums.SecurityEventType | null
    description: string | null
    severity: $Enums.SecuritySeverity | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    metadata: string | null
    resolved: boolean | null
    resolvedAt: Date | null
    resolvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SecurityEventMaxAggregateOutputType = {
    id: string | null
    eventType: $Enums.SecurityEventType | null
    description: string | null
    severity: $Enums.SecuritySeverity | null
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    metadata: string | null
    resolved: boolean | null
    resolvedAt: Date | null
    resolvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SecurityEventCountAggregateOutputType = {
    id: number
    eventType: number
    description: number
    severity: number
    ipAddress: number
    userAgent: number
    location: number
    metadata: number
    resolved: number
    resolvedAt: number
    resolvedBy: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SecurityEventMinAggregateInputType = {
    id?: true
    eventType?: true
    description?: true
    severity?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    metadata?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SecurityEventMaxAggregateInputType = {
    id?: true
    eventType?: true
    description?: true
    severity?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    metadata?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SecurityEventCountAggregateInputType = {
    id?: true
    eventType?: true
    description?: true
    severity?: true
    ipAddress?: true
    userAgent?: true
    location?: true
    metadata?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SecurityEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvent to aggregate.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityEvents
    **/
    _count?: true | SecurityEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityEventMaxAggregateInputType
  }

  export type GetSecurityEventAggregateType<T extends SecurityEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityEvent[P]>
      : GetScalarType<T[P], AggregateSecurityEvent[P]>
  }




  export type SecurityEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithAggregationInput | SecurityEventOrderByWithAggregationInput[]
    by: SecurityEventScalarFieldEnum[] | SecurityEventScalarFieldEnum
    having?: SecurityEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityEventCountAggregateInputType | true
    _min?: SecurityEventMinAggregateInputType
    _max?: SecurityEventMaxAggregateInputType
  }

  export type SecurityEventGroupByOutputType = {
    id: string
    eventType: $Enums.SecurityEventType
    description: string
    severity: $Enums.SecuritySeverity
    ipAddress: string | null
    userAgent: string | null
    location: string | null
    metadata: string | null
    resolved: boolean
    resolvedAt: Date | null
    resolvedBy: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: SecurityEventCountAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  type GetSecurityEventGroupByPayload<T extends SecurityEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
        }
      >
    >


  export type SecurityEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    description?: boolean
    severity?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    metadata?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    description?: boolean
    severity?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    metadata?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    description?: boolean
    severity?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    metadata?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectScalar = {
    id?: boolean
    eventType?: boolean
    description?: boolean
    severity?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    location?: boolean
    metadata?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SecurityEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "description" | "severity" | "ipAddress" | "userAgent" | "location" | "metadata" | "resolved" | "resolvedAt" | "resolvedBy" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["securityEvent"]>
  export type SecurityEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SecurityEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SecurityEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SecurityEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventType: $Enums.SecurityEventType
      description: string
      severity: $Enums.SecuritySeverity
      ipAddress: string | null
      userAgent: string | null
      location: string | null
      metadata: string | null
      resolved: boolean
      resolvedAt: Date | null
      resolvedBy: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["securityEvent"]>
    composites: {}
  }

  type SecurityEventGetPayload<S extends boolean | null | undefined | SecurityEventDefaultArgs> = $Result.GetResult<Prisma.$SecurityEventPayload, S>

  type SecurityEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityEventCountAggregateInputType | true
    }

  export interface SecurityEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityEvent'], meta: { name: 'SecurityEvent' } }
    /**
     * Find zero or one SecurityEvent that matches the filter.
     * @param {SecurityEventFindUniqueArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityEventFindUniqueArgs>(args: SelectSubset<T, SecurityEventFindUniqueArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityEventFindUniqueOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityEventFindFirstArgs>(args?: SelectSubset<T, SecurityEventFindFirstArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany()
     * 
     * // Get first 10 SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityEventFindManyArgs>(args?: SelectSubset<T, SecurityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityEvent.
     * @param {SecurityEventCreateArgs} args - Arguments to create a SecurityEvent.
     * @example
     * // Create one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.create({
     *   data: {
     *     // ... data to create a SecurityEvent
     *   }
     * })
     * 
     */
    create<T extends SecurityEventCreateArgs>(args: SelectSubset<T, SecurityEventCreateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityEvents.
     * @param {SecurityEventCreateManyArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityEventCreateManyArgs>(args?: SelectSubset<T, SecurityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityEvents and returns the data saved in the database.
     * @param {SecurityEventCreateManyAndReturnArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityEvents and only return the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityEvent.
     * @param {SecurityEventDeleteArgs} args - Arguments to delete one SecurityEvent.
     * @example
     * // Delete one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.delete({
     *   where: {
     *     // ... filter to delete one SecurityEvent
     *   }
     * })
     * 
     */
    delete<T extends SecurityEventDeleteArgs>(args: SelectSubset<T, SecurityEventDeleteArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityEvent.
     * @param {SecurityEventUpdateArgs} args - Arguments to update one SecurityEvent.
     * @example
     * // Update one SecurityEvent
     * const securityEvent = await prisma.securityEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityEventUpdateArgs>(args: SelectSubset<T, SecurityEventUpdateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityEvents.
     * @param {SecurityEventDeleteManyArgs} args - Arguments to filter SecurityEvents to delete.
     * @example
     * // Delete a few SecurityEvents
     * const { count } = await prisma.securityEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityEventDeleteManyArgs>(args?: SelectSubset<T, SecurityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityEvents
     * const securityEvent = await prisma.securityEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityEventUpdateManyArgs>(args: SelectSubset<T, SecurityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityEvents and returns the data updated in the database.
     * @param {SecurityEventUpdateManyAndReturnArgs} args - Arguments to update many SecurityEvents.
     * @example
     * // Update many SecurityEvents
     * const securityEvent = await prisma.securityEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityEvents and only return the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityEvent.
     * @param {SecurityEventUpsertArgs} args - Arguments to update or create a SecurityEvent.
     * @example
     * // Update or create a SecurityEvent
     * const securityEvent = await prisma.securityEvent.upsert({
     *   create: {
     *     // ... data to create a SecurityEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityEvent we want to update
     *   }
     * })
     */
    upsert<T extends SecurityEventUpsertArgs>(args: SelectSubset<T, SecurityEventUpsertArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventCountArgs} args - Arguments to filter SecurityEvents to count.
     * @example
     * // Count the number of SecurityEvents
     * const count = await prisma.securityEvent.count({
     *   where: {
     *     // ... the filter for the SecurityEvents we want to count
     *   }
     * })
    **/
    count<T extends SecurityEventCountArgs>(
      args?: Subset<T, SecurityEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityEventAggregateArgs>(args: Subset<T, SecurityEventAggregateArgs>): Prisma.PrismaPromise<GetSecurityEventAggregateType<T>>

    /**
     * Group by SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityEventGroupByArgs['orderBy'] }
        : { orderBy?: SecurityEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityEvent model
   */
  readonly fields: SecurityEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityEvent model
   */
  interface SecurityEventFieldRefs {
    readonly id: FieldRef<"SecurityEvent", 'String'>
    readonly eventType: FieldRef<"SecurityEvent", 'SecurityEventType'>
    readonly description: FieldRef<"SecurityEvent", 'String'>
    readonly severity: FieldRef<"SecurityEvent", 'SecuritySeverity'>
    readonly ipAddress: FieldRef<"SecurityEvent", 'String'>
    readonly userAgent: FieldRef<"SecurityEvent", 'String'>
    readonly location: FieldRef<"SecurityEvent", 'String'>
    readonly metadata: FieldRef<"SecurityEvent", 'String'>
    readonly resolved: FieldRef<"SecurityEvent", 'Boolean'>
    readonly resolvedAt: FieldRef<"SecurityEvent", 'DateTime'>
    readonly resolvedBy: FieldRef<"SecurityEvent", 'String'>
    readonly createdAt: FieldRef<"SecurityEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"SecurityEvent", 'DateTime'>
    readonly userId: FieldRef<"SecurityEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SecurityEvent findUnique
   */
  export type SecurityEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findUniqueOrThrow
   */
  export type SecurityEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findFirst
   */
  export type SecurityEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findFirstOrThrow
   */
  export type SecurityEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findMany
   */
  export type SecurityEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvents to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent create
   */
  export type SecurityEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityEvent.
     */
    data: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
  }

  /**
   * SecurityEvent createMany
   */
  export type SecurityEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityEvent createManyAndReturn
   */
  export type SecurityEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityEvent update
   */
  export type SecurityEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityEvent.
     */
    data: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
    /**
     * Choose, which SecurityEvent to update.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent updateMany
   */
  export type SecurityEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityEvents.
     */
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyInput>
    /**
     * Filter which SecurityEvents to update
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to update.
     */
    limit?: number
  }

  /**
   * SecurityEvent updateManyAndReturn
   */
  export type SecurityEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * The data used to update SecurityEvents.
     */
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyInput>
    /**
     * Filter which SecurityEvents to update
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityEvent upsert
   */
  export type SecurityEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityEvent to update in case it exists.
     */
    where: SecurityEventWhereUniqueInput
    /**
     * In case the SecurityEvent found by the `where` argument doesn't exist, create a new SecurityEvent with this data.
     */
    create: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
    /**
     * In case the SecurityEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
  }

  /**
   * SecurityEvent delete
   */
  export type SecurityEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter which SecurityEvent to delete.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent deleteMany
   */
  export type SecurityEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvents to delete
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to delete.
     */
    limit?: number
  }

  /**
   * SecurityEvent without action
   */
  export type SecurityEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    signerUuid: 'signerUuid',
    text: 'text',
    parent: 'parent',
    channelId: 'channelId',
    parentAuthorFid: 'parentAuthorFid',
    embeds: 'embeds',
    postHash: 'postHash',
    status: 'status',
    scheduledAt: 'scheduledAt',
    publishedAt: 'publishedAt',
    qstashMessageId: 'qstashMessageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    fid: 'fid',
    username: 'username',
    displayName: 'displayName',
    pfpUrl: 'pfpUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    signerUuid: 'signerUuid',
    isUuidApprove: 'isUuidApprove',
    signerRegDeadline: 'signerRegDeadline',
    signerPublicKey: 'signerPublicKey',
    signerApprovalUrl: 'signerApprovalUrl',
    role: 'role',
    isPremium: 'isPremium',
    premiumExpiresAt: 'premiumExpiresAt',
    dmsSentThisWeek: 'dmsSentThisWeek',
    postsThisWeek: 'postsThisWeek',
    weekResetDate: 'weekResetDate',
    lastLoginAt: 'lastLoginAt',
    loginAttempts: 'loginAttempts',
    lockedUntil: 'lockedUntil',
    lastNonceUsed: 'lastNonceUsed'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AutomationRuleScalarFieldEnum: {
    id: 'id',
    triggerWord: 'triggerWord',
    response: 'response',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    timesTriggered: 'timesTriggered',
    lastTriggered: 'lastTriggered'
  };

  export type AutomationRuleScalarFieldEnum = (typeof AutomationRuleScalarFieldEnum)[keyof typeof AutomationRuleScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    details: 'details',
    timestamp: 'timestamp',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    imageUrl: 'imageUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    frequency: 'frequency',
    minStreakLength: 'minStreakLength',
    contentRequirements: 'contentRequirements',
    rewards: 'rewards',
    prizePool: 'prizePool',
    totalDonations: 'totalDonations',
    donationGoal: 'donationGoal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const LaunchCampaignParticipantsScalarFieldEnum: {
    id: 'id',
    fid: 'fid',
    username: 'username',
    email: 'email',
    xHandle: 'xHandle',
    web3ContentWork: 'web3ContentWork',
    commitment: 'commitment',
    helpNeeded: 'helpNeeded',
    storyTellingVibe: 'storyTellingVibe',
    userId: 'userId',
    isApproved: 'isApproved',
    following_team: 'following_team',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LaunchCampaignParticipantsScalarFieldEnum = (typeof LaunchCampaignParticipantsScalarFieldEnum)[keyof typeof LaunchCampaignParticipantsScalarFieldEnum]


  export const StreakScalarFieldEnum: {
    id: 'id',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastParticipationDate: 'lastParticipationDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId',
    userId: 'userId'
  };

  export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum]


  export const ParticipationScalarFieldEnum: {
    id: 'id',
    contentTitle: 'contentTitle',
    contentUrl: 'contentUrl',
    contentHash: 'contentHash',
    description: 'description',
    onchainTxHash: 'onchainTxHash',
    isVerified: 'isVerified',
    submissionDate: 'submissionDate',
    weekNumber: 'weekNumber',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId',
    userId: 'userId'
  };

  export type ParticipationScalarFieldEnum = (typeof ParticipationScalarFieldEnum)[keyof typeof ParticipationScalarFieldEnum]


  export const CampaignPaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    txHash: 'txHash',
    blockNumber: 'blockNumber',
    gasUsed: 'gasUsed',
    gasPrice: 'gasPrice',
    status: 'status',
    recipientAddress: 'recipientAddress',
    verificationHash: 'verificationHash',
    nonceUsed: 'nonceUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId',
    payerId: 'payerId'
  };

  export type CampaignPaymentScalarFieldEnum = (typeof CampaignPaymentScalarFieldEnum)[keyof typeof CampaignPaymentScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    message: 'message',
    txHash: 'txHash',
    blockNumber: 'blockNumber',
    gasUsed: 'gasUsed',
    gasPrice: 'gasPrice',
    status: 'status',
    creatorShare: 'creatorShare',
    winnerShare: 'winnerShare',
    isDistributed: 'isDistributed',
    distributionTxHash: 'distributionTxHash',
    verificationHash: 'verificationHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campaignId: 'campaignId',
    donorId: 'donorId'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const SecurityEventScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    description: 'description',
    severity: 'severity',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    location: 'location',
    metadata: 'metadata',
    resolved: 'resolved',
    resolvedAt: 'resolvedAt',
    resolvedBy: 'resolvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SecurityEventScalarFieldEnum = (typeof SecurityEventScalarFieldEnum)[keyof typeof SecurityEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'CampaignFrequency'
   */
  export type EnumCampaignFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignFrequency'>
    


  /**
   * Reference to a field of type 'CampaignFrequency[]'
   */
  export type ListEnumCampaignFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignFrequency[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'web3ContentWork'
   */
  export type Enumweb3ContentWorkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'web3ContentWork'>
    


  /**
   * Reference to a field of type 'web3ContentWork[]'
   */
  export type ListEnumweb3ContentWorkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'web3ContentWork[]'>
    


  /**
   * Reference to a field of type 'StreakStatus'
   */
  export type EnumStreakStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreakStatus'>
    


  /**
   * Reference to a field of type 'StreakStatus[]'
   */
  export type ListEnumStreakStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreakStatus[]'>
    


  /**
   * Reference to a field of type 'ParticipationStatus'
   */
  export type EnumParticipationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipationStatus'>
    


  /**
   * Reference to a field of type 'ParticipationStatus[]'
   */
  export type ListEnumParticipationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipationStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'SecurityEventType'
   */
  export type EnumSecurityEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityEventType'>
    


  /**
   * Reference to a field of type 'SecurityEventType[]'
   */
  export type ListEnumSecurityEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityEventType[]'>
    


  /**
   * Reference to a field of type 'SecuritySeverity'
   */
  export type EnumSecuritySeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecuritySeverity'>
    


  /**
   * Reference to a field of type 'SecuritySeverity[]'
   */
  export type ListEnumSecuritySeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecuritySeverity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    signerUuid?: StringNullableFilter<"Post"> | string | null
    text?: StringFilter<"Post"> | string
    parent?: StringNullableFilter<"Post"> | string | null
    channelId?: StringNullableFilter<"Post"> | string | null
    parentAuthorFid?: IntNullableFilter<"Post"> | number | null
    embeds?: JsonNullableFilter<"Post">
    postHash?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    qstashMessageId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    signerUuid?: SortOrderInput | SortOrder
    text?: SortOrder
    parent?: SortOrderInput | SortOrder
    channelId?: SortOrderInput | SortOrder
    parentAuthorFid?: SortOrderInput | SortOrder
    embeds?: SortOrderInput | SortOrder
    postHash?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    qstashMessageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postHash?: string
    qstashMessageId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    signerUuid?: StringNullableFilter<"Post"> | string | null
    text?: StringFilter<"Post"> | string
    parent?: StringNullableFilter<"Post"> | string | null
    channelId?: StringNullableFilter<"Post"> | string | null
    parentAuthorFid?: IntNullableFilter<"Post"> | number | null
    embeds?: JsonNullableFilter<"Post">
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "postHash" | "qstashMessageId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    signerUuid?: SortOrderInput | SortOrder
    text?: SortOrder
    parent?: SortOrderInput | SortOrder
    channelId?: SortOrderInput | SortOrder
    parentAuthorFid?: SortOrderInput | SortOrder
    embeds?: SortOrderInput | SortOrder
    postHash?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    qstashMessageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    signerUuid?: StringNullableWithAggregatesFilter<"Post"> | string | null
    text?: StringWithAggregatesFilter<"Post"> | string
    parent?: StringNullableWithAggregatesFilter<"Post"> | string | null
    channelId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    parentAuthorFid?: IntNullableWithAggregatesFilter<"Post"> | number | null
    embeds?: JsonNullableWithAggregatesFilter<"Post">
    postHash?: StringNullableWithAggregatesFilter<"Post"> | string | null
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    qstashMessageId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    walletAddress?: StringFilter<"User"> | string
    fid?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    pfpUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    signerUuid?: StringNullableFilter<"User"> | string | null
    isUuidApprove?: BoolNullableFilter<"User"> | boolean | null
    signerRegDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    signerPublicKey?: StringNullableFilter<"User"> | string | null
    signerApprovalUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isPremium?: BoolFilter<"User"> | boolean
    premiumExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    dmsSentThisWeek?: IntFilter<"User"> | number
    postsThisWeek?: IntFilter<"User"> | number
    weekResetDate?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    loginAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    lastNonceUsed?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    automationRules?: AutomationRuleListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    campaigns?: CampaignListRelationFilter
    streaks?: StreakListRelationFilter
    participations?: ParticipationListRelationFilter
    donations?: DonationListRelationFilter
    campaignPayments?: CampaignPaymentListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    pfpUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signerUuid?: SortOrderInput | SortOrder
    isUuidApprove?: SortOrderInput | SortOrder
    signerRegDeadline?: SortOrderInput | SortOrder
    signerPublicKey?: SortOrderInput | SortOrder
    signerApprovalUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    premiumExpiresAt?: SortOrderInput | SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    weekResetDate?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lastNonceUsed?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    automationRules?: AutomationRuleOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    streaks?: StreakOrderByRelationAggregateInput
    participations?: ParticipationOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
    campaignPayments?: CampaignPaymentOrderByRelationAggregateInput
    securityEvents?: SecurityEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    fid?: number
    username?: string
    signerUuid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    pfpUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isUuidApprove?: BoolNullableFilter<"User"> | boolean | null
    signerRegDeadline?: DateTimeNullableFilter<"User"> | Date | string | null
    signerPublicKey?: StringNullableFilter<"User"> | string | null
    signerApprovalUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isPremium?: BoolFilter<"User"> | boolean
    premiumExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    dmsSentThisWeek?: IntFilter<"User"> | number
    postsThisWeek?: IntFilter<"User"> | number
    weekResetDate?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    loginAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    lastNonceUsed?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    automationRules?: AutomationRuleListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    campaigns?: CampaignListRelationFilter
    streaks?: StreakListRelationFilter
    participations?: ParticipationListRelationFilter
    donations?: DonationListRelationFilter
    campaignPayments?: CampaignPaymentListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
  }, "id" | "walletAddress" | "fid" | "username" | "signerUuid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    pfpUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signerUuid?: SortOrderInput | SortOrder
    isUuidApprove?: SortOrderInput | SortOrder
    signerRegDeadline?: SortOrderInput | SortOrder
    signerPublicKey?: SortOrderInput | SortOrder
    signerApprovalUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    premiumExpiresAt?: SortOrderInput | SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    weekResetDate?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    lastNonceUsed?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    fid?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    pfpUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    signerUuid?: StringNullableWithAggregatesFilter<"User"> | string | null
    isUuidApprove?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    signerRegDeadline?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    signerPublicKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    signerApprovalUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    premiumExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    dmsSentThisWeek?: IntWithAggregatesFilter<"User"> | number
    postsThisWeek?: IntWithAggregatesFilter<"User"> | number
    weekResetDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    loginAttempts?: IntWithAggregatesFilter<"User"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastNonceUsed?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AutomationRuleWhereInput = {
    AND?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    OR?: AutomationRuleWhereInput[]
    NOT?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    id?: StringFilter<"AutomationRule"> | string
    triggerWord?: StringFilter<"AutomationRule"> | string
    response?: StringFilter<"AutomationRule"> | string
    isActive?: BoolFilter<"AutomationRule"> | boolean
    createdAt?: DateTimeFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationRule"> | Date | string
    userId?: StringFilter<"AutomationRule"> | string
    timesTriggered?: IntFilter<"AutomationRule"> | number
    lastTriggered?: DateTimeNullableFilter<"AutomationRule"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AutomationRuleOrderByWithRelationInput = {
    id?: SortOrder
    triggerWord?: SortOrder
    response?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    timesTriggered?: SortOrder
    lastTriggered?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AutomationRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    OR?: AutomationRuleWhereInput[]
    NOT?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    triggerWord?: StringFilter<"AutomationRule"> | string
    response?: StringFilter<"AutomationRule"> | string
    isActive?: BoolFilter<"AutomationRule"> | boolean
    createdAt?: DateTimeFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationRule"> | Date | string
    userId?: StringFilter<"AutomationRule"> | string
    timesTriggered?: IntFilter<"AutomationRule"> | number
    lastTriggered?: DateTimeNullableFilter<"AutomationRule"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AutomationRuleOrderByWithAggregationInput = {
    id?: SortOrder
    triggerWord?: SortOrder
    response?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    timesTriggered?: SortOrder
    lastTriggered?: SortOrderInput | SortOrder
    _count?: AutomationRuleCountOrderByAggregateInput
    _avg?: AutomationRuleAvgOrderByAggregateInput
    _max?: AutomationRuleMaxOrderByAggregateInput
    _min?: AutomationRuleMinOrderByAggregateInput
    _sum?: AutomationRuleSumOrderByAggregateInput
  }

  export type AutomationRuleScalarWhereWithAggregatesInput = {
    AND?: AutomationRuleScalarWhereWithAggregatesInput | AutomationRuleScalarWhereWithAggregatesInput[]
    OR?: AutomationRuleScalarWhereWithAggregatesInput[]
    NOT?: AutomationRuleScalarWhereWithAggregatesInput | AutomationRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationRule"> | string
    triggerWord?: StringWithAggregatesFilter<"AutomationRule"> | string
    response?: StringWithAggregatesFilter<"AutomationRule"> | string
    isActive?: BoolWithAggregatesFilter<"AutomationRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutomationRule"> | Date | string
    userId?: StringWithAggregatesFilter<"AutomationRule"> | string
    timesTriggered?: IntWithAggregatesFilter<"AutomationRule"> | number
    lastTriggered?: DateTimeNullableWithAggregatesFilter<"AutomationRule"> | Date | string | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    category?: StringFilter<"Campaign"> | string
    imageUrl?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    frequency?: EnumCampaignFrequencyFilter<"Campaign"> | $Enums.CampaignFrequency
    minStreakLength?: IntFilter<"Campaign"> | number
    contentRequirements?: StringNullableFilter<"Campaign"> | string | null
    rewards?: StringNullableFilter<"Campaign"> | string | null
    prizePool?: StringNullableFilter<"Campaign"> | string | null
    totalDonations?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    donationGoal?: DecimalNullableFilter<"Campaign"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorId?: StringFilter<"Campaign"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    streaks?: StreakListRelationFilter
    participations?: ParticipationListRelationFilter
    donations?: DonationListRelationFilter
    paymentInfo?: XOR<CampaignPaymentNullableScalarRelationFilter, CampaignPaymentWhereInput> | null
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    minStreakLength?: SortOrder
    contentRequirements?: SortOrderInput | SortOrder
    rewards?: SortOrderInput | SortOrder
    prizePool?: SortOrderInput | SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    creator?: UserOrderByWithRelationInput
    streaks?: StreakOrderByRelationAggregateInput
    participations?: ParticipationOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
    paymentInfo?: CampaignPaymentOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    category?: StringFilter<"Campaign"> | string
    imageUrl?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    frequency?: EnumCampaignFrequencyFilter<"Campaign"> | $Enums.CampaignFrequency
    minStreakLength?: IntFilter<"Campaign"> | number
    contentRequirements?: StringNullableFilter<"Campaign"> | string | null
    rewards?: StringNullableFilter<"Campaign"> | string | null
    prizePool?: StringNullableFilter<"Campaign"> | string | null
    totalDonations?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    donationGoal?: DecimalNullableFilter<"Campaign"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorId?: StringFilter<"Campaign"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    streaks?: StreakListRelationFilter
    participations?: ParticipationListRelationFilter
    donations?: DonationListRelationFilter
    paymentInfo?: XOR<CampaignPaymentNullableScalarRelationFilter, CampaignPaymentWhereInput> | null
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    minStreakLength?: SortOrder
    contentRequirements?: SortOrderInput | SortOrder
    rewards?: SortOrderInput | SortOrder
    prizePool?: SortOrderInput | SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringWithAggregatesFilter<"Campaign"> | string
    category?: StringWithAggregatesFilter<"Campaign"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    frequency?: EnumCampaignFrequencyWithAggregatesFilter<"Campaign"> | $Enums.CampaignFrequency
    minStreakLength?: IntWithAggregatesFilter<"Campaign"> | number
    contentRequirements?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    rewards?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    prizePool?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    totalDonations?: DecimalWithAggregatesFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    donationGoal?: DecimalNullableWithAggregatesFilter<"Campaign"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type LaunchCampaignParticipantsWhereInput = {
    AND?: LaunchCampaignParticipantsWhereInput | LaunchCampaignParticipantsWhereInput[]
    OR?: LaunchCampaignParticipantsWhereInput[]
    NOT?: LaunchCampaignParticipantsWhereInput | LaunchCampaignParticipantsWhereInput[]
    id?: StringFilter<"LaunchCampaignParticipants"> | string
    fid?: IntFilter<"LaunchCampaignParticipants"> | number
    username?: StringFilter<"LaunchCampaignParticipants"> | string
    email?: StringFilter<"LaunchCampaignParticipants"> | string
    xHandle?: StringFilter<"LaunchCampaignParticipants"> | string
    web3ContentWork?: Enumweb3ContentWorkFilter<"LaunchCampaignParticipants"> | $Enums.web3ContentWork
    commitment?: BoolFilter<"LaunchCampaignParticipants"> | boolean
    helpNeeded?: StringNullableFilter<"LaunchCampaignParticipants"> | string | null
    storyTellingVibe?: StringFilter<"LaunchCampaignParticipants"> | string
    userId?: StringFilter<"LaunchCampaignParticipants"> | string
    isApproved?: BoolNullableFilter<"LaunchCampaignParticipants"> | boolean | null
    following_team?: BoolFilter<"LaunchCampaignParticipants"> | boolean
    createdAt?: DateTimeNullableFilter<"LaunchCampaignParticipants"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"LaunchCampaignParticipants"> | Date | string | null
  }

  export type LaunchCampaignParticipantsOrderByWithRelationInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    xHandle?: SortOrder
    web3ContentWork?: SortOrder
    commitment?: SortOrder
    helpNeeded?: SortOrderInput | SortOrder
    storyTellingVibe?: SortOrder
    userId?: SortOrder
    isApproved?: SortOrderInput | SortOrder
    following_team?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type LaunchCampaignParticipantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fid?: number
    username?: string
    email?: string
    xHandle?: string
    userId?: string
    AND?: LaunchCampaignParticipantsWhereInput | LaunchCampaignParticipantsWhereInput[]
    OR?: LaunchCampaignParticipantsWhereInput[]
    NOT?: LaunchCampaignParticipantsWhereInput | LaunchCampaignParticipantsWhereInput[]
    web3ContentWork?: Enumweb3ContentWorkFilter<"LaunchCampaignParticipants"> | $Enums.web3ContentWork
    commitment?: BoolFilter<"LaunchCampaignParticipants"> | boolean
    helpNeeded?: StringNullableFilter<"LaunchCampaignParticipants"> | string | null
    storyTellingVibe?: StringFilter<"LaunchCampaignParticipants"> | string
    isApproved?: BoolNullableFilter<"LaunchCampaignParticipants"> | boolean | null
    following_team?: BoolFilter<"LaunchCampaignParticipants"> | boolean
    createdAt?: DateTimeNullableFilter<"LaunchCampaignParticipants"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"LaunchCampaignParticipants"> | Date | string | null
  }, "id" | "fid" | "username" | "email" | "xHandle" | "userId">

  export type LaunchCampaignParticipantsOrderByWithAggregationInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    xHandle?: SortOrder
    web3ContentWork?: SortOrder
    commitment?: SortOrder
    helpNeeded?: SortOrderInput | SortOrder
    storyTellingVibe?: SortOrder
    userId?: SortOrder
    isApproved?: SortOrderInput | SortOrder
    following_team?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LaunchCampaignParticipantsCountOrderByAggregateInput
    _avg?: LaunchCampaignParticipantsAvgOrderByAggregateInput
    _max?: LaunchCampaignParticipantsMaxOrderByAggregateInput
    _min?: LaunchCampaignParticipantsMinOrderByAggregateInput
    _sum?: LaunchCampaignParticipantsSumOrderByAggregateInput
  }

  export type LaunchCampaignParticipantsScalarWhereWithAggregatesInput = {
    AND?: LaunchCampaignParticipantsScalarWhereWithAggregatesInput | LaunchCampaignParticipantsScalarWhereWithAggregatesInput[]
    OR?: LaunchCampaignParticipantsScalarWhereWithAggregatesInput[]
    NOT?: LaunchCampaignParticipantsScalarWhereWithAggregatesInput | LaunchCampaignParticipantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LaunchCampaignParticipants"> | string
    fid?: IntWithAggregatesFilter<"LaunchCampaignParticipants"> | number
    username?: StringWithAggregatesFilter<"LaunchCampaignParticipants"> | string
    email?: StringWithAggregatesFilter<"LaunchCampaignParticipants"> | string
    xHandle?: StringWithAggregatesFilter<"LaunchCampaignParticipants"> | string
    web3ContentWork?: Enumweb3ContentWorkWithAggregatesFilter<"LaunchCampaignParticipants"> | $Enums.web3ContentWork
    commitment?: BoolWithAggregatesFilter<"LaunchCampaignParticipants"> | boolean
    helpNeeded?: StringNullableWithAggregatesFilter<"LaunchCampaignParticipants"> | string | null
    storyTellingVibe?: StringWithAggregatesFilter<"LaunchCampaignParticipants"> | string
    userId?: StringWithAggregatesFilter<"LaunchCampaignParticipants"> | string
    isApproved?: BoolNullableWithAggregatesFilter<"LaunchCampaignParticipants"> | boolean | null
    following_team?: BoolWithAggregatesFilter<"LaunchCampaignParticipants"> | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter<"LaunchCampaignParticipants"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"LaunchCampaignParticipants"> | Date | string | null
  }

  export type StreakWhereInput = {
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    id?: StringFilter<"Streak"> | string
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastParticipationDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    status?: EnumStreakStatusFilter<"Streak"> | $Enums.StreakStatus
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    campaignId?: StringFilter<"Streak"> | string
    userId?: StringFilter<"Streak"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StreakOrderByWithRelationInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastParticipationDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_userId?: StreakCampaignIdUserIdCompoundUniqueInput
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastParticipationDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    status?: EnumStreakStatusFilter<"Streak"> | $Enums.StreakStatus
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    campaignId?: StringFilter<"Streak"> | string
    userId?: StringFilter<"Streak"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "campaignId_userId">

  export type StreakOrderByWithAggregationInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastParticipationDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    _count?: StreakCountOrderByAggregateInput
    _avg?: StreakAvgOrderByAggregateInput
    _max?: StreakMaxOrderByAggregateInput
    _min?: StreakMinOrderByAggregateInput
    _sum?: StreakSumOrderByAggregateInput
  }

  export type StreakScalarWhereWithAggregatesInput = {
    AND?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    OR?: StreakScalarWhereWithAggregatesInput[]
    NOT?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streak"> | string
    currentStreak?: IntWithAggregatesFilter<"Streak"> | number
    longestStreak?: IntWithAggregatesFilter<"Streak"> | number
    lastParticipationDate?: DateTimeNullableWithAggregatesFilter<"Streak"> | Date | string | null
    status?: EnumStreakStatusWithAggregatesFilter<"Streak"> | $Enums.StreakStatus
    createdAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
    campaignId?: StringWithAggregatesFilter<"Streak"> | string
    userId?: StringWithAggregatesFilter<"Streak"> | string
  }

  export type ParticipationWhereInput = {
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    id?: StringFilter<"Participation"> | string
    contentTitle?: StringFilter<"Participation"> | string
    contentUrl?: StringNullableFilter<"Participation"> | string | null
    contentHash?: StringFilter<"Participation"> | string
    description?: StringNullableFilter<"Participation"> | string | null
    onchainTxHash?: StringNullableFilter<"Participation"> | string | null
    isVerified?: BoolFilter<"Participation"> | boolean
    submissionDate?: DateTimeFilter<"Participation"> | Date | string
    weekNumber?: IntFilter<"Participation"> | number
    status?: EnumParticipationStatusFilter<"Participation"> | $Enums.ParticipationStatus
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    campaignId?: StringFilter<"Participation"> | string
    userId?: StringFilter<"Participation"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParticipationOrderByWithRelationInput = {
    id?: SortOrder
    contentTitle?: SortOrder
    contentUrl?: SortOrderInput | SortOrder
    contentHash?: SortOrder
    description?: SortOrderInput | SortOrder
    onchainTxHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    submissionDate?: SortOrder
    weekNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ParticipationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    contentTitle?: StringFilter<"Participation"> | string
    contentUrl?: StringNullableFilter<"Participation"> | string | null
    contentHash?: StringFilter<"Participation"> | string
    description?: StringNullableFilter<"Participation"> | string | null
    onchainTxHash?: StringNullableFilter<"Participation"> | string | null
    isVerified?: BoolFilter<"Participation"> | boolean
    submissionDate?: DateTimeFilter<"Participation"> | Date | string
    weekNumber?: IntFilter<"Participation"> | number
    status?: EnumParticipationStatusFilter<"Participation"> | $Enums.ParticipationStatus
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    campaignId?: StringFilter<"Participation"> | string
    userId?: StringFilter<"Participation"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ParticipationOrderByWithAggregationInput = {
    id?: SortOrder
    contentTitle?: SortOrder
    contentUrl?: SortOrderInput | SortOrder
    contentHash?: SortOrder
    description?: SortOrderInput | SortOrder
    onchainTxHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    submissionDate?: SortOrder
    weekNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
    _count?: ParticipationCountOrderByAggregateInput
    _avg?: ParticipationAvgOrderByAggregateInput
    _max?: ParticipationMaxOrderByAggregateInput
    _min?: ParticipationMinOrderByAggregateInput
    _sum?: ParticipationSumOrderByAggregateInput
  }

  export type ParticipationScalarWhereWithAggregatesInput = {
    AND?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    OR?: ParticipationScalarWhereWithAggregatesInput[]
    NOT?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participation"> | string
    contentTitle?: StringWithAggregatesFilter<"Participation"> | string
    contentUrl?: StringNullableWithAggregatesFilter<"Participation"> | string | null
    contentHash?: StringWithAggregatesFilter<"Participation"> | string
    description?: StringNullableWithAggregatesFilter<"Participation"> | string | null
    onchainTxHash?: StringNullableWithAggregatesFilter<"Participation"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Participation"> | boolean
    submissionDate?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
    weekNumber?: IntWithAggregatesFilter<"Participation"> | number
    status?: EnumParticipationStatusWithAggregatesFilter<"Participation"> | $Enums.ParticipationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
    campaignId?: StringWithAggregatesFilter<"Participation"> | string
    userId?: StringWithAggregatesFilter<"Participation"> | string
  }

  export type CampaignPaymentWhereInput = {
    AND?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    OR?: CampaignPaymentWhereInput[]
    NOT?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    id?: StringFilter<"CampaignPayment"> | string
    amount?: DecimalFilter<"CampaignPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"CampaignPayment"> | string
    txHash?: StringFilter<"CampaignPayment"> | string
    blockNumber?: IntNullableFilter<"CampaignPayment"> | number | null
    gasUsed?: IntNullableFilter<"CampaignPayment"> | number | null
    gasPrice?: StringNullableFilter<"CampaignPayment"> | string | null
    status?: EnumPaymentStatusFilter<"CampaignPayment"> | $Enums.PaymentStatus
    recipientAddress?: StringFilter<"CampaignPayment"> | string
    verificationHash?: StringNullableFilter<"CampaignPayment"> | string | null
    nonceUsed?: StringNullableFilter<"CampaignPayment"> | string | null
    createdAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    campaignId?: StringFilter<"CampaignPayment"> | string
    payerId?: StringFilter<"CampaignPayment"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CampaignPaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrderInput | SortOrder
    gasUsed?: SortOrderInput | SortOrder
    gasPrice?: SortOrderInput | SortOrder
    status?: SortOrder
    recipientAddress?: SortOrder
    verificationHash?: SortOrderInput | SortOrder
    nonceUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    payerId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    payer?: UserOrderByWithRelationInput
  }

  export type CampaignPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash?: string
    campaignId?: string
    AND?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    OR?: CampaignPaymentWhereInput[]
    NOT?: CampaignPaymentWhereInput | CampaignPaymentWhereInput[]
    amount?: DecimalFilter<"CampaignPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"CampaignPayment"> | string
    blockNumber?: IntNullableFilter<"CampaignPayment"> | number | null
    gasUsed?: IntNullableFilter<"CampaignPayment"> | number | null
    gasPrice?: StringNullableFilter<"CampaignPayment"> | string | null
    status?: EnumPaymentStatusFilter<"CampaignPayment"> | $Enums.PaymentStatus
    recipientAddress?: StringFilter<"CampaignPayment"> | string
    verificationHash?: StringNullableFilter<"CampaignPayment"> | string | null
    nonceUsed?: StringNullableFilter<"CampaignPayment"> | string | null
    createdAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    payerId?: StringFilter<"CampaignPayment"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "txHash" | "campaignId">

  export type CampaignPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrderInput | SortOrder
    gasUsed?: SortOrderInput | SortOrder
    gasPrice?: SortOrderInput | SortOrder
    status?: SortOrder
    recipientAddress?: SortOrder
    verificationHash?: SortOrderInput | SortOrder
    nonceUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    payerId?: SortOrder
    _count?: CampaignPaymentCountOrderByAggregateInput
    _avg?: CampaignPaymentAvgOrderByAggregateInput
    _max?: CampaignPaymentMaxOrderByAggregateInput
    _min?: CampaignPaymentMinOrderByAggregateInput
    _sum?: CampaignPaymentSumOrderByAggregateInput
  }

  export type CampaignPaymentScalarWhereWithAggregatesInput = {
    AND?: CampaignPaymentScalarWhereWithAggregatesInput | CampaignPaymentScalarWhereWithAggregatesInput[]
    OR?: CampaignPaymentScalarWhereWithAggregatesInput[]
    NOT?: CampaignPaymentScalarWhereWithAggregatesInput | CampaignPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignPayment"> | string
    amount?: DecimalWithAggregatesFilter<"CampaignPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"CampaignPayment"> | string
    txHash?: StringWithAggregatesFilter<"CampaignPayment"> | string
    blockNumber?: IntNullableWithAggregatesFilter<"CampaignPayment"> | number | null
    gasUsed?: IntNullableWithAggregatesFilter<"CampaignPayment"> | number | null
    gasPrice?: StringNullableWithAggregatesFilter<"CampaignPayment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"CampaignPayment"> | $Enums.PaymentStatus
    recipientAddress?: StringWithAggregatesFilter<"CampaignPayment"> | string
    verificationHash?: StringNullableWithAggregatesFilter<"CampaignPayment"> | string | null
    nonceUsed?: StringNullableWithAggregatesFilter<"CampaignPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignPayment"> | Date | string
    campaignId?: StringWithAggregatesFilter<"CampaignPayment"> | string
    payerId?: StringWithAggregatesFilter<"CampaignPayment"> | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    amount?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Donation"> | string
    message?: StringNullableFilter<"Donation"> | string | null
    txHash?: StringFilter<"Donation"> | string
    blockNumber?: IntNullableFilter<"Donation"> | number | null
    gasUsed?: IntNullableFilter<"Donation"> | number | null
    gasPrice?: StringNullableFilter<"Donation"> | string | null
    status?: EnumPaymentStatusFilter<"Donation"> | $Enums.PaymentStatus
    creatorShare?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFilter<"Donation"> | boolean
    distributionTxHash?: StringNullableFilter<"Donation"> | string | null
    verificationHash?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    campaignId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    message?: SortOrderInput | SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrderInput | SortOrder
    gasUsed?: SortOrderInput | SortOrder
    gasPrice?: SortOrderInput | SortOrder
    status?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
    isDistributed?: SortOrder
    distributionTxHash?: SortOrderInput | SortOrder
    verificationHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    donorId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    donor?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    amount?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Donation"> | string
    message?: StringNullableFilter<"Donation"> | string | null
    blockNumber?: IntNullableFilter<"Donation"> | number | null
    gasUsed?: IntNullableFilter<"Donation"> | number | null
    gasPrice?: StringNullableFilter<"Donation"> | string | null
    status?: EnumPaymentStatusFilter<"Donation"> | $Enums.PaymentStatus
    creatorShare?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFilter<"Donation"> | boolean
    distributionTxHash?: StringNullableFilter<"Donation"> | string | null
    verificationHash?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    campaignId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "txHash">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    message?: SortOrderInput | SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrderInput | SortOrder
    gasUsed?: SortOrderInput | SortOrder
    gasPrice?: SortOrderInput | SortOrder
    status?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
    isDistributed?: SortOrder
    distributionTxHash?: SortOrderInput | SortOrder
    verificationHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    donorId?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    amount?: DecimalWithAggregatesFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Donation"> | string
    message?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    txHash?: StringWithAggregatesFilter<"Donation"> | string
    blockNumber?: IntNullableWithAggregatesFilter<"Donation"> | number | null
    gasUsed?: IntNullableWithAggregatesFilter<"Donation"> | number | null
    gasPrice?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Donation"> | $Enums.PaymentStatus
    creatorShare?: DecimalWithAggregatesFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalWithAggregatesFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolWithAggregatesFilter<"Donation"> | boolean
    distributionTxHash?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    verificationHash?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    campaignId?: StringWithAggregatesFilter<"Donation"> | string
    donorId?: StringWithAggregatesFilter<"Donation"> | string
  }

  export type SecurityEventWhereInput = {
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    id?: StringFilter<"SecurityEvent"> | string
    eventType?: EnumSecurityEventTypeFilter<"SecurityEvent"> | $Enums.SecurityEventType
    description?: StringFilter<"SecurityEvent"> | string
    severity?: EnumSecuritySeverityFilter<"SecurityEvent"> | $Enums.SecuritySeverity
    ipAddress?: StringNullableFilter<"SecurityEvent"> | string | null
    userAgent?: StringNullableFilter<"SecurityEvent"> | string | null
    location?: StringNullableFilter<"SecurityEvent"> | string | null
    metadata?: StringNullableFilter<"SecurityEvent"> | string | null
    resolved?: BoolFilter<"SecurityEvent"> | boolean
    resolvedAt?: DateTimeNullableFilter<"SecurityEvent"> | Date | string | null
    resolvedBy?: StringNullableFilter<"SecurityEvent"> | string | null
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    userId?: StringFilter<"SecurityEvent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SecurityEventOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SecurityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    eventType?: EnumSecurityEventTypeFilter<"SecurityEvent"> | $Enums.SecurityEventType
    description?: StringFilter<"SecurityEvent"> | string
    severity?: EnumSecuritySeverityFilter<"SecurityEvent"> | $Enums.SecuritySeverity
    ipAddress?: StringNullableFilter<"SecurityEvent"> | string | null
    userAgent?: StringNullableFilter<"SecurityEvent"> | string | null
    location?: StringNullableFilter<"SecurityEvent"> | string | null
    metadata?: StringNullableFilter<"SecurityEvent"> | string | null
    resolved?: BoolFilter<"SecurityEvent"> | boolean
    resolvedAt?: DateTimeNullableFilter<"SecurityEvent"> | Date | string | null
    resolvedBy?: StringNullableFilter<"SecurityEvent"> | string | null
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    userId?: StringFilter<"SecurityEvent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SecurityEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SecurityEventCountOrderByAggregateInput
    _max?: SecurityEventMaxOrderByAggregateInput
    _min?: SecurityEventMinOrderByAggregateInput
  }

  export type SecurityEventScalarWhereWithAggregatesInput = {
    AND?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    OR?: SecurityEventScalarWhereWithAggregatesInput[]
    NOT?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityEvent"> | string
    eventType?: EnumSecurityEventTypeWithAggregatesFilter<"SecurityEvent"> | $Enums.SecurityEventType
    description?: StringWithAggregatesFilter<"SecurityEvent"> | string
    severity?: EnumSecuritySeverityWithAggregatesFilter<"SecurityEvent"> | $Enums.SecuritySeverity
    ipAddress?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    location?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    resolved?: BoolWithAggregatesFilter<"SecurityEvent"> | boolean
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"SecurityEvent"> | Date | string | null
    resolvedBy?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SecurityEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SecurityEvent"> | Date | string
    userId?: StringWithAggregatesFilter<"SecurityEvent"> | string
  }

  export type PostCreateInput = {
    id?: string
    signerUuid?: string | null
    text: string
    parent?: string | null
    channelId?: string | null
    parentAuthorFid?: number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: string | null
    status?: $Enums.PostStatus
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    qstashMessageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    signerUuid?: string | null
    text: string
    parent?: string | null
    channelId?: string | null
    parentAuthorFid?: number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: string | null
    status?: $Enums.PostStatus
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    qstashMessageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    signerUuid?: string | null
    text: string
    parent?: string | null
    channelId?: string | null
    parentAuthorFid?: number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: string | null
    status?: $Enums.PostStatus
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    qstashMessageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationRuleCreateInput = {
    id?: string
    triggerWord: string
    response: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    timesTriggered?: number
    lastTriggered?: Date | string | null
    user: UserCreateNestedOneWithoutAutomationRulesInput
  }

  export type AutomationRuleUncheckedCreateInput = {
    id?: string
    triggerWord: string
    response: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    timesTriggered?: number
    lastTriggered?: Date | string | null
  }

  export type AutomationRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAutomationRulesNestedInput
  }

  export type AutomationRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationRuleCreateManyInput = {
    id?: string
    triggerWord: string
    response: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    timesTriggered?: number
    lastTriggered?: Date | string | null
  }

  export type AutomationRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    details?: string | null
    timestamp?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    action: string
    details?: string | null
    timestamp?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    action: string
    details?: string | null
    timestamp?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCampaignsInput
    streaks?: StreakCreateNestedManyWithoutCampaignInput
    participations?: ParticipationCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    streaks?: StreakUncheckedCreateNestedManyWithoutCampaignInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    streaks?: StreakUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    streaks?: StreakUncheckedUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type LaunchCampaignParticipantsCreateInput = {
    id?: string
    fid: number
    username: string
    email: string
    xHandle: string
    web3ContentWork: $Enums.web3ContentWork
    commitment: boolean
    helpNeeded?: string | null
    storyTellingVibe: string
    userId: string
    isApproved?: boolean | null
    following_team?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LaunchCampaignParticipantsUncheckedCreateInput = {
    id?: string
    fid: number
    username: string
    email: string
    xHandle: string
    web3ContentWork: $Enums.web3ContentWork
    commitment: boolean
    helpNeeded?: string | null
    storyTellingVibe: string
    userId: string
    isApproved?: boolean | null
    following_team?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LaunchCampaignParticipantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xHandle?: StringFieldUpdateOperationsInput | string
    web3ContentWork?: Enumweb3ContentWorkFieldUpdateOperationsInput | $Enums.web3ContentWork
    commitment?: BoolFieldUpdateOperationsInput | boolean
    helpNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    storyTellingVibe?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following_team?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaunchCampaignParticipantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xHandle?: StringFieldUpdateOperationsInput | string
    web3ContentWork?: Enumweb3ContentWorkFieldUpdateOperationsInput | $Enums.web3ContentWork
    commitment?: BoolFieldUpdateOperationsInput | boolean
    helpNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    storyTellingVibe?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following_team?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaunchCampaignParticipantsCreateManyInput = {
    id?: string
    fid: number
    username: string
    email: string
    xHandle: string
    web3ContentWork: $Enums.web3ContentWork
    commitment: boolean
    helpNeeded?: string | null
    storyTellingVibe: string
    userId: string
    isApproved?: boolean | null
    following_team?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LaunchCampaignParticipantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xHandle?: StringFieldUpdateOperationsInput | string
    web3ContentWork?: Enumweb3ContentWorkFieldUpdateOperationsInput | $Enums.web3ContentWork
    commitment?: BoolFieldUpdateOperationsInput | boolean
    helpNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    storyTellingVibe?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following_team?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaunchCampaignParticipantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    xHandle?: StringFieldUpdateOperationsInput | string
    web3ContentWork?: Enumweb3ContentWorkFieldUpdateOperationsInput | $Enums.web3ContentWork
    commitment?: BoolFieldUpdateOperationsInput | boolean
    helpNeeded?: NullableStringFieldUpdateOperationsInput | string | null
    storyTellingVibe?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following_team?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StreakCreateInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutStreaksInput
    user: UserCreateNestedOneWithoutStreaksInput
  }

  export type StreakUncheckedCreateInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    userId: string
  }

  export type StreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutStreaksNestedInput
    user?: UserUpdateOneRequiredWithoutStreaksNestedInput
  }

  export type StreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StreakCreateManyInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    userId: string
  }

  export type StreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationCreateInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutParticipationsInput
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationUncheckedCreateInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    userId: string
  }

  export type ParticipationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutParticipationsNestedInput
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationCreateManyInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    userId: string
  }

  export type ParticipationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignPaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPaymentInfoInput
    payer: UserCreateNestedOneWithoutCampaignPaymentsInput
  }

  export type CampaignPaymentUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    payerId: string
  }

  export type CampaignPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPaymentInfoNestedInput
    payer?: UserUpdateOneRequiredWithoutCampaignPaymentsNestedInput
  }

  export type CampaignPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignPaymentCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    payerId: string
  }

  export type CampaignPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutDonationsInput
    donor: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    donorId: string
  }

  export type DonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutDonationsNestedInput
    donor?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
    donorId: string
  }

  export type DonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityEventCreateInput = {
    id?: string
    eventType: $Enums.SecurityEventType
    description: string
    severity?: $Enums.SecuritySeverity
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    metadata?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSecurityEventsInput
  }

  export type SecurityEventUncheckedCreateInput = {
    id?: string
    eventType: $Enums.SecurityEventType
    description: string
    severity?: $Enums.SecuritySeverity
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    metadata?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SecurityEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSecurityEventsNestedInput
  }

  export type SecurityEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityEventCreateManyInput = {
    id?: string
    eventType: $Enums.SecurityEventType
    description: string
    severity?: $Enums.SecuritySeverity
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    metadata?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SecurityEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    signerUuid?: SortOrder
    text?: SortOrder
    parent?: SortOrder
    channelId?: SortOrder
    parentAuthorFid?: SortOrder
    embeds?: SortOrder
    postHash?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    qstashMessageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    parentAuthorFid?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    signerUuid?: SortOrder
    text?: SortOrder
    parent?: SortOrder
    channelId?: SortOrder
    parentAuthorFid?: SortOrder
    postHash?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    qstashMessageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    signerUuid?: SortOrder
    text?: SortOrder
    parent?: SortOrder
    channelId?: SortOrder
    parentAuthorFid?: SortOrder
    postHash?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    qstashMessageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    parentAuthorFid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type AutomationRuleListRelationFilter = {
    every?: AutomationRuleWhereInput
    some?: AutomationRuleWhereInput
    none?: AutomationRuleWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type StreakListRelationFilter = {
    every?: StreakWhereInput
    some?: StreakWhereInput
    none?: StreakWhereInput
  }

  export type ParticipationListRelationFilter = {
    every?: ParticipationWhereInput
    some?: ParticipationWhereInput
    none?: ParticipationWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type CampaignPaymentListRelationFilter = {
    every?: CampaignPaymentWhereInput
    some?: CampaignPaymentWhereInput
    none?: CampaignPaymentWhereInput
  }

  export type SecurityEventListRelationFilter = {
    every?: SecurityEventWhereInput
    some?: SecurityEventWhereInput
    none?: SecurityEventWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreakOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecurityEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    pfpUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signerUuid?: SortOrder
    isUuidApprove?: SortOrder
    signerRegDeadline?: SortOrder
    signerPublicKey?: SortOrder
    signerApprovalUrl?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    premiumExpiresAt?: SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    weekResetDate?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastNonceUsed?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    fid?: SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    loginAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    pfpUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signerUuid?: SortOrder
    isUuidApprove?: SortOrder
    signerRegDeadline?: SortOrder
    signerPublicKey?: SortOrder
    signerApprovalUrl?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    premiumExpiresAt?: SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    weekResetDate?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastNonceUsed?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    pfpUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    signerUuid?: SortOrder
    isUuidApprove?: SortOrder
    signerRegDeadline?: SortOrder
    signerPublicKey?: SortOrder
    signerApprovalUrl?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    premiumExpiresAt?: SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    weekResetDate?: SortOrder
    lastLoginAt?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    lastNonceUsed?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    fid?: SortOrder
    dmsSentThisWeek?: SortOrder
    postsThisWeek?: SortOrder
    loginAttempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AutomationRuleCountOrderByAggregateInput = {
    id?: SortOrder
    triggerWord?: SortOrder
    response?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    timesTriggered?: SortOrder
    lastTriggered?: SortOrder
  }

  export type AutomationRuleAvgOrderByAggregateInput = {
    timesTriggered?: SortOrder
  }

  export type AutomationRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerWord?: SortOrder
    response?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    timesTriggered?: SortOrder
    lastTriggered?: SortOrder
  }

  export type AutomationRuleMinOrderByAggregateInput = {
    id?: SortOrder
    triggerWord?: SortOrder
    response?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    timesTriggered?: SortOrder
    lastTriggered?: SortOrder
  }

  export type AutomationRuleSumOrderByAggregateInput = {
    timesTriggered?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type EnumCampaignFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignFrequency | EnumCampaignFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignFrequencyFilter<$PrismaModel> | $Enums.CampaignFrequency
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type CampaignPaymentNullableScalarRelationFilter = {
    is?: CampaignPaymentWhereInput | null
    isNot?: CampaignPaymentWhereInput | null
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    minStreakLength?: SortOrder
    contentRequirements?: SortOrder
    rewards?: SortOrder
    prizePool?: SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    minStreakLength?: SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    minStreakLength?: SortOrder
    contentRequirements?: SortOrder
    rewards?: SortOrder
    prizePool?: SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    minStreakLength?: SortOrder
    contentRequirements?: SortOrder
    rewards?: SortOrder
    prizePool?: SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    minStreakLength?: SortOrder
    totalDonations?: SortOrder
    donationGoal?: SortOrder
  }

  export type EnumCampaignFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignFrequency | EnumCampaignFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.CampaignFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignFrequencyFilter<$PrismaModel>
    _max?: NestedEnumCampaignFrequencyFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type Enumweb3ContentWorkFilter<$PrismaModel = never> = {
    equals?: $Enums.web3ContentWork | Enumweb3ContentWorkFieldRefInput<$PrismaModel>
    in?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumweb3ContentWorkFilter<$PrismaModel> | $Enums.web3ContentWork
  }

  export type LaunchCampaignParticipantsCountOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    xHandle?: SortOrder
    web3ContentWork?: SortOrder
    commitment?: SortOrder
    helpNeeded?: SortOrder
    storyTellingVibe?: SortOrder
    userId?: SortOrder
    isApproved?: SortOrder
    following_team?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaunchCampaignParticipantsAvgOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type LaunchCampaignParticipantsMaxOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    xHandle?: SortOrder
    web3ContentWork?: SortOrder
    commitment?: SortOrder
    helpNeeded?: SortOrder
    storyTellingVibe?: SortOrder
    userId?: SortOrder
    isApproved?: SortOrder
    following_team?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaunchCampaignParticipantsMinOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    xHandle?: SortOrder
    web3ContentWork?: SortOrder
    commitment?: SortOrder
    helpNeeded?: SortOrder
    storyTellingVibe?: SortOrder
    userId?: SortOrder
    isApproved?: SortOrder
    following_team?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaunchCampaignParticipantsSumOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type Enumweb3ContentWorkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.web3ContentWork | Enumweb3ContentWorkFieldRefInput<$PrismaModel>
    in?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumweb3ContentWorkWithAggregatesFilter<$PrismaModel> | $Enums.web3ContentWork
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumweb3ContentWorkFilter<$PrismaModel>
    _max?: NestedEnumweb3ContentWorkFilter<$PrismaModel>
  }

  export type EnumStreakStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StreakStatus | EnumStreakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreakStatusFilter<$PrismaModel> | $Enums.StreakStatus
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type StreakCampaignIdUserIdCompoundUniqueInput = {
    campaignId: string
    userId: string
  }

  export type StreakCountOrderByAggregateInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastParticipationDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type StreakAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type StreakMaxOrderByAggregateInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastParticipationDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type StreakMinOrderByAggregateInput = {
    id?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastParticipationDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type StreakSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type EnumStreakStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreakStatus | EnumStreakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreakStatusWithAggregatesFilter<$PrismaModel> | $Enums.StreakStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreakStatusFilter<$PrismaModel>
    _max?: NestedEnumStreakStatusFilter<$PrismaModel>
  }

  export type EnumParticipationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipationStatus | EnumParticipationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipationStatusFilter<$PrismaModel> | $Enums.ParticipationStatus
  }

  export type ParticipationCountOrderByAggregateInput = {
    id?: SortOrder
    contentTitle?: SortOrder
    contentUrl?: SortOrder
    contentHash?: SortOrder
    description?: SortOrder
    onchainTxHash?: SortOrder
    isVerified?: SortOrder
    submissionDate?: SortOrder
    weekNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type ParticipationAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type ParticipationMaxOrderByAggregateInput = {
    id?: SortOrder
    contentTitle?: SortOrder
    contentUrl?: SortOrder
    contentHash?: SortOrder
    description?: SortOrder
    onchainTxHash?: SortOrder
    isVerified?: SortOrder
    submissionDate?: SortOrder
    weekNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type ParticipationMinOrderByAggregateInput = {
    id?: SortOrder
    contentTitle?: SortOrder
    contentUrl?: SortOrder
    contentHash?: SortOrder
    description?: SortOrder
    onchainTxHash?: SortOrder
    isVerified?: SortOrder
    submissionDate?: SortOrder
    weekNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    userId?: SortOrder
  }

  export type ParticipationSumOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type EnumParticipationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipationStatus | EnumParticipationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipationStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipationStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type CampaignPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    gasPrice?: SortOrder
    status?: SortOrder
    recipientAddress?: SortOrder
    verificationHash?: SortOrder
    nonceUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    payerId?: SortOrder
  }

  export type CampaignPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
  }

  export type CampaignPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    gasPrice?: SortOrder
    status?: SortOrder
    recipientAddress?: SortOrder
    verificationHash?: SortOrder
    nonceUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    payerId?: SortOrder
  }

  export type CampaignPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    gasPrice?: SortOrder
    status?: SortOrder
    recipientAddress?: SortOrder
    verificationHash?: SortOrder
    nonceUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    payerId?: SortOrder
  }

  export type CampaignPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    message?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    gasPrice?: SortOrder
    status?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
    isDistributed?: SortOrder
    distributionTxHash?: SortOrder
    verificationHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    donorId?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    amount?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    message?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    gasPrice?: SortOrder
    status?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
    isDistributed?: SortOrder
    distributionTxHash?: SortOrder
    verificationHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    donorId?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    message?: SortOrder
    txHash?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    gasPrice?: SortOrder
    status?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
    isDistributed?: SortOrder
    distributionTxHash?: SortOrder
    verificationHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaignId?: SortOrder
    donorId?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    amount?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    creatorShare?: SortOrder
    winnerShare?: SortOrder
  }

  export type EnumSecurityEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeFilter<$PrismaModel> | $Enums.SecurityEventType
  }

  export type EnumSecuritySeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.SecuritySeverity | EnumSecuritySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSecuritySeverityFilter<$PrismaModel> | $Enums.SecuritySeverity
  }

  export type SecurityEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    metadata?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SecurityEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    metadata?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SecurityEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    metadata?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumSecurityEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.SecurityEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
    _max?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
  }

  export type EnumSecuritySeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecuritySeverity | EnumSecuritySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSecuritySeverityWithAggregatesFilter<$PrismaModel> | $Enums.SecuritySeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecuritySeverityFilter<$PrismaModel>
    _max?: NestedEnumSecuritySeverityFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AutomationRuleCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type StreakCreateNestedManyWithoutUserInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput> | StreakCreateWithoutUserInput[] | StreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput | StreakCreateOrConnectWithoutUserInput[]
    createMany?: StreakCreateManyUserInputEnvelope
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
  }

  export type ParticipationCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CampaignPaymentCreateNestedManyWithoutPayerInput = {
    create?: XOR<CampaignPaymentCreateWithoutPayerInput, CampaignPaymentUncheckedCreateWithoutPayerInput> | CampaignPaymentCreateWithoutPayerInput[] | CampaignPaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutPayerInput | CampaignPaymentCreateOrConnectWithoutPayerInput[]
    createMany?: CampaignPaymentCreateManyPayerInputEnvelope
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
  }

  export type SecurityEventCreateNestedManyWithoutUserInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AutomationRuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type StreakUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput> | StreakCreateWithoutUserInput[] | StreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput | StreakCreateOrConnectWithoutUserInput[]
    createMany?: StreakCreateManyUserInputEnvelope
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
  }

  export type ParticipationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<CampaignPaymentCreateWithoutPayerInput, CampaignPaymentUncheckedCreateWithoutPayerInput> | CampaignPaymentCreateWithoutPayerInput[] | CampaignPaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutPayerInput | CampaignPaymentCreateOrConnectWithoutPayerInput[]
    createMany?: CampaignPaymentCreateManyPayerInputEnvelope
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
  }

  export type SecurityEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AutomationRuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    upsert?: AutomationRuleUpsertWithWhereUniqueWithoutUserInput | AutomationRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    set?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    disconnect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    delete?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    update?: AutomationRuleUpdateWithWhereUniqueWithoutUserInput | AutomationRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationRuleUpdateManyWithWhereWithoutUserInput | AutomationRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatorInput | CampaignUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatorInput | CampaignUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatorInput | CampaignUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type StreakUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput> | StreakCreateWithoutUserInput[] | StreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput | StreakCreateOrConnectWithoutUserInput[]
    upsert?: StreakUpsertWithWhereUniqueWithoutUserInput | StreakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreakCreateManyUserInputEnvelope
    set?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    disconnect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    delete?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    update?: StreakUpdateWithWhereUniqueWithoutUserInput | StreakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreakUpdateManyWithWhereWithoutUserInput | StreakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreakScalarWhereInput | StreakScalarWhereInput[]
  }

  export type ParticipationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutUserInput | ParticipationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutUserInput | ParticipationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutUserInput | ParticipationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CampaignPaymentUpdateManyWithoutPayerNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutPayerInput, CampaignPaymentUncheckedCreateWithoutPayerInput> | CampaignPaymentCreateWithoutPayerInput[] | CampaignPaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutPayerInput | CampaignPaymentCreateOrConnectWithoutPayerInput[]
    upsert?: CampaignPaymentUpsertWithWhereUniqueWithoutPayerInput | CampaignPaymentUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: CampaignPaymentCreateManyPayerInputEnvelope
    set?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    disconnect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    delete?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    update?: CampaignPaymentUpdateWithWhereUniqueWithoutPayerInput | CampaignPaymentUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: CampaignPaymentUpdateManyWithWhereWithoutPayerInput | CampaignPaymentUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
  }

  export type SecurityEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutUserInput | SecurityEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutUserInput | SecurityEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutUserInput | SecurityEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AutomationRuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    upsert?: AutomationRuleUpsertWithWhereUniqueWithoutUserInput | AutomationRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    set?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    disconnect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    delete?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    update?: AutomationRuleUpdateWithWhereUniqueWithoutUserInput | AutomationRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationRuleUpdateManyWithWhereWithoutUserInput | AutomationRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput> | CampaignCreateWithoutCreatorInput[] | CampaignUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatorInput | CampaignCreateOrConnectWithoutCreatorInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatorInput | CampaignUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CampaignCreateManyCreatorInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatorInput | CampaignUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatorInput | CampaignUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type StreakUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput> | StreakCreateWithoutUserInput[] | StreakUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutUserInput | StreakCreateOrConnectWithoutUserInput[]
    upsert?: StreakUpsertWithWhereUniqueWithoutUserInput | StreakUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreakCreateManyUserInputEnvelope
    set?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    disconnect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    delete?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    update?: StreakUpdateWithWhereUniqueWithoutUserInput | StreakUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreakUpdateManyWithWhereWithoutUserInput | StreakUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreakScalarWhereInput | StreakScalarWhereInput[]
  }

  export type ParticipationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutUserInput | ParticipationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutUserInput | ParticipationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutUserInput | ParticipationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutPayerInput, CampaignPaymentUncheckedCreateWithoutPayerInput> | CampaignPaymentCreateWithoutPayerInput[] | CampaignPaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutPayerInput | CampaignPaymentCreateOrConnectWithoutPayerInput[]
    upsert?: CampaignPaymentUpsertWithWhereUniqueWithoutPayerInput | CampaignPaymentUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: CampaignPaymentCreateManyPayerInputEnvelope
    set?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    disconnect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    delete?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    connect?: CampaignPaymentWhereUniqueInput | CampaignPaymentWhereUniqueInput[]
    update?: CampaignPaymentUpdateWithWhereUniqueWithoutPayerInput | CampaignPaymentUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: CampaignPaymentUpdateManyWithWhereWithoutPayerInput | CampaignPaymentUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
  }

  export type SecurityEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutUserInput | SecurityEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutUserInput | SecurityEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutUserInput | SecurityEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAutomationRulesInput = {
    create?: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationRulesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAutomationRulesNestedInput = {
    create?: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationRulesInput
    upsert?: UserUpsertWithoutAutomationRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutomationRulesInput, UserUpdateWithoutAutomationRulesInput>, UserUncheckedUpdateWithoutAutomationRulesInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type StreakCreateNestedManyWithoutCampaignInput = {
    create?: XOR<StreakCreateWithoutCampaignInput, StreakUncheckedCreateWithoutCampaignInput> | StreakCreateWithoutCampaignInput[] | StreakUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutCampaignInput | StreakCreateOrConnectWithoutCampaignInput[]
    createMany?: StreakCreateManyCampaignInputEnvelope
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
  }

  export type ParticipationCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ParticipationCreateWithoutCampaignInput, ParticipationUncheckedCreateWithoutCampaignInput> | ParticipationCreateWithoutCampaignInput[] | ParticipationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCampaignInput | ParticipationCreateOrConnectWithoutCampaignInput[]
    createMany?: ParticipationCreateManyCampaignInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CampaignPaymentCreateNestedOneWithoutCampaignInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    connect?: CampaignPaymentWhereUniqueInput
  }

  export type StreakUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<StreakCreateWithoutCampaignInput, StreakUncheckedCreateWithoutCampaignInput> | StreakCreateWithoutCampaignInput[] | StreakUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutCampaignInput | StreakCreateOrConnectWithoutCampaignInput[]
    createMany?: StreakCreateManyCampaignInputEnvelope
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
  }

  export type ParticipationUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ParticipationCreateWithoutCampaignInput, ParticipationUncheckedCreateWithoutCampaignInput> | ParticipationCreateWithoutCampaignInput[] | ParticipationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCampaignInput | ParticipationCreateOrConnectWithoutCampaignInput[]
    createMany?: ParticipationCreateManyCampaignInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    connect?: CampaignPaymentWhereUniqueInput
  }

  export type EnumCampaignFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.CampaignFrequency
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type StreakUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<StreakCreateWithoutCampaignInput, StreakUncheckedCreateWithoutCampaignInput> | StreakCreateWithoutCampaignInput[] | StreakUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutCampaignInput | StreakCreateOrConnectWithoutCampaignInput[]
    upsert?: StreakUpsertWithWhereUniqueWithoutCampaignInput | StreakUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: StreakCreateManyCampaignInputEnvelope
    set?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    disconnect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    delete?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    update?: StreakUpdateWithWhereUniqueWithoutCampaignInput | StreakUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: StreakUpdateManyWithWhereWithoutCampaignInput | StreakUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: StreakScalarWhereInput | StreakScalarWhereInput[]
  }

  export type ParticipationUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ParticipationCreateWithoutCampaignInput, ParticipationUncheckedCreateWithoutCampaignInput> | ParticipationCreateWithoutCampaignInput[] | ParticipationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCampaignInput | ParticipationCreateOrConnectWithoutCampaignInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutCampaignInput | ParticipationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ParticipationCreateManyCampaignInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutCampaignInput | ParticipationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutCampaignInput | ParticipationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutCampaignInput | DonationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutCampaignInput | DonationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutCampaignInput | DonationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CampaignPaymentUpdateOneWithoutCampaignNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    upsert?: CampaignPaymentUpsertWithoutCampaignInput
    disconnect?: CampaignPaymentWhereInput | boolean
    delete?: CampaignPaymentWhereInput | boolean
    connect?: CampaignPaymentWhereUniqueInput
    update?: XOR<XOR<CampaignPaymentUpdateToOneWithWhereWithoutCampaignInput, CampaignPaymentUpdateWithoutCampaignInput>, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
  }

  export type StreakUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<StreakCreateWithoutCampaignInput, StreakUncheckedCreateWithoutCampaignInput> | StreakCreateWithoutCampaignInput[] | StreakUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: StreakCreateOrConnectWithoutCampaignInput | StreakCreateOrConnectWithoutCampaignInput[]
    upsert?: StreakUpsertWithWhereUniqueWithoutCampaignInput | StreakUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: StreakCreateManyCampaignInputEnvelope
    set?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    disconnect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    delete?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    connect?: StreakWhereUniqueInput | StreakWhereUniqueInput[]
    update?: StreakUpdateWithWhereUniqueWithoutCampaignInput | StreakUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: StreakUpdateManyWithWhereWithoutCampaignInput | StreakUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: StreakScalarWhereInput | StreakScalarWhereInput[]
  }

  export type ParticipationUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ParticipationCreateWithoutCampaignInput, ParticipationUncheckedCreateWithoutCampaignInput> | ParticipationCreateWithoutCampaignInput[] | ParticipationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCampaignInput | ParticipationCreateOrConnectWithoutCampaignInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutCampaignInput | ParticipationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ParticipationCreateManyCampaignInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutCampaignInput | ParticipationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutCampaignInput | ParticipationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutCampaignInput | DonationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutCampaignInput | DonationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutCampaignInput | DonationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput = {
    create?: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    connectOrCreate?: CampaignPaymentCreateOrConnectWithoutCampaignInput
    upsert?: CampaignPaymentUpsertWithoutCampaignInput
    disconnect?: CampaignPaymentWhereInput | boolean
    delete?: CampaignPaymentWhereInput | boolean
    connect?: CampaignPaymentWhereUniqueInput
    update?: XOR<XOR<CampaignPaymentUpdateToOneWithWhereWithoutCampaignInput, CampaignPaymentUpdateWithoutCampaignInput>, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
  }

  export type Enumweb3ContentWorkFieldUpdateOperationsInput = {
    set?: $Enums.web3ContentWork
  }

  export type CampaignCreateNestedOneWithoutStreaksInput = {
    create?: XOR<CampaignCreateWithoutStreaksInput, CampaignUncheckedCreateWithoutStreaksInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutStreaksInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStreaksInput = {
    create?: XOR<UserCreateWithoutStreaksInput, UserUncheckedCreateWithoutStreaksInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreaksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStreakStatusFieldUpdateOperationsInput = {
    set?: $Enums.StreakStatus
  }

  export type CampaignUpdateOneRequiredWithoutStreaksNestedInput = {
    create?: XOR<CampaignCreateWithoutStreaksInput, CampaignUncheckedCreateWithoutStreaksInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutStreaksInput
    upsert?: CampaignUpsertWithoutStreaksInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutStreaksInput, CampaignUpdateWithoutStreaksInput>, CampaignUncheckedUpdateWithoutStreaksInput>
  }

  export type UserUpdateOneRequiredWithoutStreaksNestedInput = {
    create?: XOR<UserCreateWithoutStreaksInput, UserUncheckedCreateWithoutStreaksInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreaksInput
    upsert?: UserUpsertWithoutStreaksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreaksInput, UserUpdateWithoutStreaksInput>, UserUncheckedUpdateWithoutStreaksInput>
  }

  export type CampaignCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<CampaignCreateWithoutParticipationsInput, CampaignUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutParticipationsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumParticipationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipationStatus
  }

  export type CampaignUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<CampaignCreateWithoutParticipationsInput, CampaignUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutParticipationsInput
    upsert?: CampaignUpsertWithoutParticipationsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutParticipationsInput, CampaignUpdateWithoutParticipationsInput>, CampaignUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type CampaignCreateNestedOneWithoutPaymentInfoInput = {
    create?: XOR<CampaignCreateWithoutPaymentInfoInput, CampaignUncheckedCreateWithoutPaymentInfoInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPaymentInfoInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCampaignPaymentsInput = {
    create?: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CampaignUpdateOneRequiredWithoutPaymentInfoNestedInput = {
    create?: XOR<CampaignCreateWithoutPaymentInfoInput, CampaignUncheckedCreateWithoutPaymentInfoInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutPaymentInfoInput
    upsert?: CampaignUpsertWithoutPaymentInfoInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutPaymentInfoInput, CampaignUpdateWithoutPaymentInfoInput>, CampaignUncheckedUpdateWithoutPaymentInfoInput>
  }

  export type UserUpdateOneRequiredWithoutCampaignPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignPaymentsInput
    upsert?: UserUpsertWithoutCampaignPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignPaymentsInput, UserUpdateWithoutCampaignPaymentsInput>, UserUncheckedUpdateWithoutCampaignPaymentsInput>
  }

  export type CampaignCreateNestedOneWithoutDonationsInput = {
    create?: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonationsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationsInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonationsInput
    upsert?: CampaignUpsertWithoutDonationsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutDonationsInput, CampaignUpdateWithoutDonationsInput>, CampaignUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    upsert?: UserUpsertWithoutDonationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsInput, UserUpdateWithoutDonationsInput>, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSecurityEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.SecurityEventType
  }

  export type EnumSecuritySeverityFieldUpdateOperationsInput = {
    set?: $Enums.SecuritySeverity
  }

  export type UserUpdateOneRequiredWithoutSecurityEventsNestedInput = {
    create?: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityEventsInput
    upsert?: UserUpsertWithoutSecurityEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityEventsInput, UserUpdateWithoutSecurityEventsInput>, UserUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCampaignFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignFrequency | EnumCampaignFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignFrequencyFilter<$PrismaModel> | $Enums.CampaignFrequency
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignFrequency | EnumCampaignFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignFrequency[] | ListEnumCampaignFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.CampaignFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignFrequencyFilter<$PrismaModel>
    _max?: NestedEnumCampaignFrequencyFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumweb3ContentWorkFilter<$PrismaModel = never> = {
    equals?: $Enums.web3ContentWork | Enumweb3ContentWorkFieldRefInput<$PrismaModel>
    in?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumweb3ContentWorkFilter<$PrismaModel> | $Enums.web3ContentWork
  }

  export type NestedEnumweb3ContentWorkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.web3ContentWork | Enumweb3ContentWorkFieldRefInput<$PrismaModel>
    in?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    notIn?: $Enums.web3ContentWork[] | ListEnumweb3ContentWorkFieldRefInput<$PrismaModel>
    not?: NestedEnumweb3ContentWorkWithAggregatesFilter<$PrismaModel> | $Enums.web3ContentWork
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumweb3ContentWorkFilter<$PrismaModel>
    _max?: NestedEnumweb3ContentWorkFilter<$PrismaModel>
  }

  export type NestedEnumStreakStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StreakStatus | EnumStreakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreakStatusFilter<$PrismaModel> | $Enums.StreakStatus
  }

  export type NestedEnumStreakStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreakStatus | EnumStreakStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreakStatus[] | ListEnumStreakStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreakStatusWithAggregatesFilter<$PrismaModel> | $Enums.StreakStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreakStatusFilter<$PrismaModel>
    _max?: NestedEnumStreakStatusFilter<$PrismaModel>
  }

  export type NestedEnumParticipationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipationStatus | EnumParticipationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipationStatusFilter<$PrismaModel> | $Enums.ParticipationStatus
  }

  export type NestedEnumParticipationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipationStatus | EnumParticipationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipationStatus[] | ListEnumParticipationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipationStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSecurityEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeFilter<$PrismaModel> | $Enums.SecurityEventType
  }

  export type NestedEnumSecuritySeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.SecuritySeverity | EnumSecuritySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSecuritySeverityFilter<$PrismaModel> | $Enums.SecuritySeverity
  }

  export type NestedEnumSecurityEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityEventType | EnumSecurityEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityEventType[] | ListEnumSecurityEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.SecurityEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
    _max?: NestedEnumSecurityEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumSecuritySeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecuritySeverity | EnumSecuritySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecuritySeverity[] | ListEnumSecuritySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSecuritySeverityWithAggregatesFilter<$PrismaModel> | $Enums.SecuritySeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecuritySeverityFilter<$PrismaModel>
    _max?: NestedEnumSecuritySeverityFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    signerUuid?: string | null
    text: string
    parent?: string | null
    channelId?: string | null
    parentAuthorFid?: number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: string | null
    status?: $Enums.PostStatus
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    qstashMessageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    signerUuid?: string | null
    text: string
    parent?: string | null
    channelId?: string | null
    parentAuthorFid?: number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: string | null
    status?: $Enums.PostStatus
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    qstashMessageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AutomationRuleCreateWithoutUserInput = {
    id?: string
    triggerWord: string
    response: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    timesTriggered?: number
    lastTriggered?: Date | string | null
  }

  export type AutomationRuleUncheckedCreateWithoutUserInput = {
    id?: string
    triggerWord: string
    response: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    timesTriggered?: number
    lastTriggered?: Date | string | null
  }

  export type AutomationRuleCreateOrConnectWithoutUserInput = {
    where: AutomationRuleWhereUniqueInput
    create: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput>
  }

  export type AutomationRuleCreateManyUserInputEnvelope = {
    data: AutomationRuleCreateManyUserInput | AutomationRuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    timestamp?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    timestamp?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutCreatorInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    streaks?: StreakCreateNestedManyWithoutCampaignInput
    participations?: ParticipationCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    streaks?: StreakUncheckedCreateNestedManyWithoutCampaignInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput>
  }

  export type CampaignCreateManyCreatorInputEnvelope = {
    data: CampaignCreateManyCreatorInput | CampaignCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type StreakCreateWithoutUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutStreaksInput
  }

  export type StreakUncheckedCreateWithoutUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type StreakCreateOrConnectWithoutUserInput = {
    where: StreakWhereUniqueInput
    create: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
  }

  export type StreakCreateManyUserInputEnvelope = {
    data: StreakCreateManyUserInput | StreakCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticipationCreateWithoutUserInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationUncheckedCreateWithoutUserInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type ParticipationCreateOrConnectWithoutUserInput = {
    where: ParticipationWhereUniqueInput
    create: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput>
  }

  export type ParticipationCreateManyUserInputEnvelope = {
    data: ParticipationCreateManyUserInput | ParticipationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutDonorInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type CampaignPaymentCreateWithoutPayerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutPaymentInfoInput
  }

  export type CampaignPaymentUncheckedCreateWithoutPayerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type CampaignPaymentCreateOrConnectWithoutPayerInput = {
    where: CampaignPaymentWhereUniqueInput
    create: XOR<CampaignPaymentCreateWithoutPayerInput, CampaignPaymentUncheckedCreateWithoutPayerInput>
  }

  export type CampaignPaymentCreateManyPayerInputEnvelope = {
    data: CampaignPaymentCreateManyPayerInput | CampaignPaymentCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type SecurityEventCreateWithoutUserInput = {
    id?: string
    eventType: $Enums.SecurityEventType
    description: string
    severity?: $Enums.SecuritySeverity
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    metadata?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityEventUncheckedCreateWithoutUserInput = {
    id?: string
    eventType: $Enums.SecurityEventType
    description: string
    severity?: $Enums.SecuritySeverity
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    metadata?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityEventCreateOrConnectWithoutUserInput = {
    where: SecurityEventWhereUniqueInput
    create: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput>
  }

  export type SecurityEventCreateManyUserInputEnvelope = {
    data: SecurityEventCreateManyUserInput | SecurityEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    signerUuid?: StringNullableFilter<"Post"> | string | null
    text?: StringFilter<"Post"> | string
    parent?: StringNullableFilter<"Post"> | string | null
    channelId?: StringNullableFilter<"Post"> | string | null
    parentAuthorFid?: IntNullableFilter<"Post"> | number | null
    embeds?: JsonNullableFilter<"Post">
    postHash?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    qstashMessageId?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: StringFilter<"Post"> | string
  }

  export type AutomationRuleUpsertWithWhereUniqueWithoutUserInput = {
    where: AutomationRuleWhereUniqueInput
    update: XOR<AutomationRuleUpdateWithoutUserInput, AutomationRuleUncheckedUpdateWithoutUserInput>
    create: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput>
  }

  export type AutomationRuleUpdateWithWhereUniqueWithoutUserInput = {
    where: AutomationRuleWhereUniqueInput
    data: XOR<AutomationRuleUpdateWithoutUserInput, AutomationRuleUncheckedUpdateWithoutUserInput>
  }

  export type AutomationRuleUpdateManyWithWhereWithoutUserInput = {
    where: AutomationRuleScalarWhereInput
    data: XOR<AutomationRuleUpdateManyMutationInput, AutomationRuleUncheckedUpdateManyWithoutUserInput>
  }

  export type AutomationRuleScalarWhereInput = {
    AND?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
    OR?: AutomationRuleScalarWhereInput[]
    NOT?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
    id?: StringFilter<"AutomationRule"> | string
    triggerWord?: StringFilter<"AutomationRule"> | string
    response?: StringFilter<"AutomationRule"> | string
    isActive?: BoolFilter<"AutomationRule"> | boolean
    createdAt?: DateTimeFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationRule"> | Date | string
    userId?: StringFilter<"AutomationRule"> | string
    timesTriggered?: IntFilter<"AutomationRule"> | number
    lastTriggered?: DateTimeNullableFilter<"AutomationRule"> | Date | string | null
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCreatorInput, CampaignUncheckedUpdateWithoutCreatorInput>
    create: XOR<CampaignCreateWithoutCreatorInput, CampaignUncheckedCreateWithoutCreatorInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCreatorInput, CampaignUncheckedUpdateWithoutCreatorInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCreatorInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    category?: StringFilter<"Campaign"> | string
    imageUrl?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeFilter<"Campaign"> | Date | string
    endDate?: DateTimeFilter<"Campaign"> | Date | string
    frequency?: EnumCampaignFrequencyFilter<"Campaign"> | $Enums.CampaignFrequency
    minStreakLength?: IntFilter<"Campaign"> | number
    contentRequirements?: StringNullableFilter<"Campaign"> | string | null
    rewards?: StringNullableFilter<"Campaign"> | string | null
    prizePool?: StringNullableFilter<"Campaign"> | string | null
    totalDonations?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    donationGoal?: DecimalNullableFilter<"Campaign"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorId?: StringFilter<"Campaign"> | string
  }

  export type StreakUpsertWithWhereUniqueWithoutUserInput = {
    where: StreakWhereUniqueInput
    update: XOR<StreakUpdateWithoutUserInput, StreakUncheckedUpdateWithoutUserInput>
    create: XOR<StreakCreateWithoutUserInput, StreakUncheckedCreateWithoutUserInput>
  }

  export type StreakUpdateWithWhereUniqueWithoutUserInput = {
    where: StreakWhereUniqueInput
    data: XOR<StreakUpdateWithoutUserInput, StreakUncheckedUpdateWithoutUserInput>
  }

  export type StreakUpdateManyWithWhereWithoutUserInput = {
    where: StreakScalarWhereInput
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyWithoutUserInput>
  }

  export type StreakScalarWhereInput = {
    AND?: StreakScalarWhereInput | StreakScalarWhereInput[]
    OR?: StreakScalarWhereInput[]
    NOT?: StreakScalarWhereInput | StreakScalarWhereInput[]
    id?: StringFilter<"Streak"> | string
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastParticipationDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    status?: EnumStreakStatusFilter<"Streak"> | $Enums.StreakStatus
    createdAt?: DateTimeFilter<"Streak"> | Date | string
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
    campaignId?: StringFilter<"Streak"> | string
    userId?: StringFilter<"Streak"> | string
  }

  export type ParticipationUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipationWhereUniqueInput
    update: XOR<ParticipationUpdateWithoutUserInput, ParticipationUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput>
  }

  export type ParticipationUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipationWhereUniqueInput
    data: XOR<ParticipationUpdateWithoutUserInput, ParticipationUncheckedUpdateWithoutUserInput>
  }

  export type ParticipationUpdateManyWithWhereWithoutUserInput = {
    where: ParticipationScalarWhereInput
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticipationScalarWhereInput = {
    AND?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
    OR?: ParticipationScalarWhereInput[]
    NOT?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
    id?: StringFilter<"Participation"> | string
    contentTitle?: StringFilter<"Participation"> | string
    contentUrl?: StringNullableFilter<"Participation"> | string | null
    contentHash?: StringFilter<"Participation"> | string
    description?: StringNullableFilter<"Participation"> | string | null
    onchainTxHash?: StringNullableFilter<"Participation"> | string | null
    isVerified?: BoolFilter<"Participation"> | boolean
    submissionDate?: DateTimeFilter<"Participation"> | Date | string
    weekNumber?: IntFilter<"Participation"> | number
    status?: EnumParticipationStatusFilter<"Participation"> | $Enums.ParticipationStatus
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    campaignId?: StringFilter<"Participation"> | string
    userId?: StringFilter<"Participation"> | string
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: StringFilter<"Donation"> | string
    amount?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Donation"> | string
    message?: StringNullableFilter<"Donation"> | string | null
    txHash?: StringFilter<"Donation"> | string
    blockNumber?: IntNullableFilter<"Donation"> | number | null
    gasUsed?: IntNullableFilter<"Donation"> | number | null
    gasPrice?: StringNullableFilter<"Donation"> | string | null
    status?: EnumPaymentStatusFilter<"Donation"> | $Enums.PaymentStatus
    creatorShare?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFilter<"Donation"> | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFilter<"Donation"> | boolean
    distributionTxHash?: StringNullableFilter<"Donation"> | string | null
    verificationHash?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    campaignId?: StringFilter<"Donation"> | string
    donorId?: StringFilter<"Donation"> | string
  }

  export type CampaignPaymentUpsertWithWhereUniqueWithoutPayerInput = {
    where: CampaignPaymentWhereUniqueInput
    update: XOR<CampaignPaymentUpdateWithoutPayerInput, CampaignPaymentUncheckedUpdateWithoutPayerInput>
    create: XOR<CampaignPaymentCreateWithoutPayerInput, CampaignPaymentUncheckedCreateWithoutPayerInput>
  }

  export type CampaignPaymentUpdateWithWhereUniqueWithoutPayerInput = {
    where: CampaignPaymentWhereUniqueInput
    data: XOR<CampaignPaymentUpdateWithoutPayerInput, CampaignPaymentUncheckedUpdateWithoutPayerInput>
  }

  export type CampaignPaymentUpdateManyWithWhereWithoutPayerInput = {
    where: CampaignPaymentScalarWhereInput
    data: XOR<CampaignPaymentUpdateManyMutationInput, CampaignPaymentUncheckedUpdateManyWithoutPayerInput>
  }

  export type CampaignPaymentScalarWhereInput = {
    AND?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
    OR?: CampaignPaymentScalarWhereInput[]
    NOT?: CampaignPaymentScalarWhereInput | CampaignPaymentScalarWhereInput[]
    id?: StringFilter<"CampaignPayment"> | string
    amount?: DecimalFilter<"CampaignPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"CampaignPayment"> | string
    txHash?: StringFilter<"CampaignPayment"> | string
    blockNumber?: IntNullableFilter<"CampaignPayment"> | number | null
    gasUsed?: IntNullableFilter<"CampaignPayment"> | number | null
    gasPrice?: StringNullableFilter<"CampaignPayment"> | string | null
    status?: EnumPaymentStatusFilter<"CampaignPayment"> | $Enums.PaymentStatus
    recipientAddress?: StringFilter<"CampaignPayment"> | string
    verificationHash?: StringNullableFilter<"CampaignPayment"> | string | null
    nonceUsed?: StringNullableFilter<"CampaignPayment"> | string | null
    createdAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignPayment"> | Date | string
    campaignId?: StringFilter<"CampaignPayment"> | string
    payerId?: StringFilter<"CampaignPayment"> | string
  }

  export type SecurityEventUpsertWithWhereUniqueWithoutUserInput = {
    where: SecurityEventWhereUniqueInput
    update: XOR<SecurityEventUpdateWithoutUserInput, SecurityEventUncheckedUpdateWithoutUserInput>
    create: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput>
  }

  export type SecurityEventUpdateWithWhereUniqueWithoutUserInput = {
    where: SecurityEventWhereUniqueInput
    data: XOR<SecurityEventUpdateWithoutUserInput, SecurityEventUncheckedUpdateWithoutUserInput>
  }

  export type SecurityEventUpdateManyWithWhereWithoutUserInput = {
    where: SecurityEventScalarWhereInput
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyWithoutUserInput>
  }

  export type SecurityEventScalarWhereInput = {
    AND?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    OR?: SecurityEventScalarWhereInput[]
    NOT?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    id?: StringFilter<"SecurityEvent"> | string
    eventType?: EnumSecurityEventTypeFilter<"SecurityEvent"> | $Enums.SecurityEventType
    description?: StringFilter<"SecurityEvent"> | string
    severity?: EnumSecuritySeverityFilter<"SecurityEvent"> | $Enums.SecuritySeverity
    ipAddress?: StringNullableFilter<"SecurityEvent"> | string | null
    userAgent?: StringNullableFilter<"SecurityEvent"> | string | null
    location?: StringNullableFilter<"SecurityEvent"> | string | null
    metadata?: StringNullableFilter<"SecurityEvent"> | string | null
    resolved?: BoolFilter<"SecurityEvent"> | boolean
    resolvedAt?: DateTimeNullableFilter<"SecurityEvent"> | Date | string | null
    resolvedBy?: StringNullableFilter<"SecurityEvent"> | string | null
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    userId?: StringFilter<"SecurityEvent"> | string
  }

  export type UserCreateWithoutAutomationRulesInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAutomationRulesInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAutomationRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
  }

  export type UserUpsertWithoutAutomationRulesInput = {
    update: XOR<UserUpdateWithoutAutomationRulesInput, UserUncheckedUpdateWithoutAutomationRulesInput>
    create: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutomationRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutomationRulesInput, UserUncheckedUpdateWithoutAutomationRulesInput>
  }

  export type UserUpdateWithoutAutomationRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAutomationRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type StreakCreateWithoutCampaignInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStreaksInput
  }

  export type StreakUncheckedCreateWithoutCampaignInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type StreakCreateOrConnectWithoutCampaignInput = {
    where: StreakWhereUniqueInput
    create: XOR<StreakCreateWithoutCampaignInput, StreakUncheckedCreateWithoutCampaignInput>
  }

  export type StreakCreateManyCampaignInputEnvelope = {
    data: StreakCreateManyCampaignInput | StreakCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type ParticipationCreateWithoutCampaignInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationUncheckedCreateWithoutCampaignInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ParticipationCreateOrConnectWithoutCampaignInput = {
    where: ParticipationWhereUniqueInput
    create: XOR<ParticipationCreateWithoutCampaignInput, ParticipationUncheckedCreateWithoutCampaignInput>
  }

  export type ParticipationCreateManyCampaignInputEnvelope = {
    data: ParticipationCreateManyCampaignInput | ParticipationCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutCampaignInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donor: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateWithoutCampaignInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donorId: string
  }

  export type DonationCreateOrConnectWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput>
  }

  export type DonationCreateManyCampaignInputEnvelope = {
    data: DonationCreateManyCampaignInput | DonationCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CampaignPaymentCreateWithoutCampaignInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: UserCreateNestedOneWithoutCampaignPaymentsInput
  }

  export type CampaignPaymentUncheckedCreateWithoutCampaignInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payerId: string
  }

  export type CampaignPaymentCreateOrConnectWithoutCampaignInput = {
    where: CampaignPaymentWhereUniqueInput
    create: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreakUpsertWithWhereUniqueWithoutCampaignInput = {
    where: StreakWhereUniqueInput
    update: XOR<StreakUpdateWithoutCampaignInput, StreakUncheckedUpdateWithoutCampaignInput>
    create: XOR<StreakCreateWithoutCampaignInput, StreakUncheckedCreateWithoutCampaignInput>
  }

  export type StreakUpdateWithWhereUniqueWithoutCampaignInput = {
    where: StreakWhereUniqueInput
    data: XOR<StreakUpdateWithoutCampaignInput, StreakUncheckedUpdateWithoutCampaignInput>
  }

  export type StreakUpdateManyWithWhereWithoutCampaignInput = {
    where: StreakScalarWhereInput
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyWithoutCampaignInput>
  }

  export type ParticipationUpsertWithWhereUniqueWithoutCampaignInput = {
    where: ParticipationWhereUniqueInput
    update: XOR<ParticipationUpdateWithoutCampaignInput, ParticipationUncheckedUpdateWithoutCampaignInput>
    create: XOR<ParticipationCreateWithoutCampaignInput, ParticipationUncheckedCreateWithoutCampaignInput>
  }

  export type ParticipationUpdateWithWhereUniqueWithoutCampaignInput = {
    where: ParticipationWhereUniqueInput
    data: XOR<ParticipationUpdateWithoutCampaignInput, ParticipationUncheckedUpdateWithoutCampaignInput>
  }

  export type ParticipationUpdateManyWithWhereWithoutCampaignInput = {
    where: ParticipationScalarWhereInput
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyWithoutCampaignInput>
  }

  export type DonationUpsertWithWhereUniqueWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutCampaignInput, DonationUncheckedUpdateWithoutCampaignInput>
    create: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutCampaignInput, DonationUncheckedUpdateWithoutCampaignInput>
  }

  export type DonationUpdateManyWithWhereWithoutCampaignInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignPaymentUpsertWithoutCampaignInput = {
    update: XOR<CampaignPaymentUpdateWithoutCampaignInput, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignPaymentCreateWithoutCampaignInput, CampaignPaymentUncheckedCreateWithoutCampaignInput>
    where?: CampaignPaymentWhereInput
  }

  export type CampaignPaymentUpdateToOneWithWhereWithoutCampaignInput = {
    where?: CampaignPaymentWhereInput
    data: XOR<CampaignPaymentUpdateWithoutCampaignInput, CampaignPaymentUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignPaymentUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutCampaignPaymentsNestedInput
  }

  export type CampaignPaymentUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payerId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateWithoutStreaksInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCampaignsInput
    participations?: ParticipationCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutStreaksInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    participations?: ParticipationUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutStreaksInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutStreaksInput, CampaignUncheckedCreateWithoutStreaksInput>
  }

  export type UserCreateWithoutStreaksInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreaksInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreaksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreaksInput, UserUncheckedCreateWithoutStreaksInput>
  }

  export type CampaignUpsertWithoutStreaksInput = {
    update: XOR<CampaignUpdateWithoutStreaksInput, CampaignUncheckedUpdateWithoutStreaksInput>
    create: XOR<CampaignCreateWithoutStreaksInput, CampaignUncheckedCreateWithoutStreaksInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutStreaksInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutStreaksInput, CampaignUncheckedUpdateWithoutStreaksInput>
  }

  export type CampaignUpdateWithoutStreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    participations?: ParticipationUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutStreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    participations?: ParticipationUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutStreaksInput = {
    update: XOR<UserUpdateWithoutStreaksInput, UserUncheckedUpdateWithoutStreaksInput>
    create: XOR<UserCreateWithoutStreaksInput, UserUncheckedCreateWithoutStreaksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreaksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreaksInput, UserUncheckedUpdateWithoutStreaksInput>
  }

  export type UserUpdateWithoutStreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreaksInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutParticipationsInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCampaignsInput
    streaks?: StreakCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutParticipationsInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    streaks?: StreakUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutParticipationsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutParticipationsInput, CampaignUncheckedCreateWithoutParticipationsInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type CampaignUpsertWithoutParticipationsInput = {
    update: XOR<CampaignUpdateWithoutParticipationsInput, CampaignUncheckedUpdateWithoutParticipationsInput>
    create: XOR<CampaignCreateWithoutParticipationsInput, CampaignUncheckedCreateWithoutParticipationsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutParticipationsInput, CampaignUncheckedUpdateWithoutParticipationsInput>
  }

  export type CampaignUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    streaks?: StreakUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    streaks?: StreakUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutPaymentInfoInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCampaignsInput
    streaks?: StreakCreateNestedManyWithoutCampaignInput
    participations?: ParticipationCreateNestedManyWithoutCampaignInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutPaymentInfoInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    streaks?: StreakUncheckedCreateNestedManyWithoutCampaignInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutCampaignInput
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutPaymentInfoInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutPaymentInfoInput, CampaignUncheckedCreateWithoutPaymentInfoInput>
  }

  export type UserCreateWithoutCampaignPaymentsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignPaymentsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
  }

  export type CampaignUpsertWithoutPaymentInfoInput = {
    update: XOR<CampaignUpdateWithoutPaymentInfoInput, CampaignUncheckedUpdateWithoutPaymentInfoInput>
    create: XOR<CampaignCreateWithoutPaymentInfoInput, CampaignUncheckedCreateWithoutPaymentInfoInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutPaymentInfoInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutPaymentInfoInput, CampaignUncheckedUpdateWithoutPaymentInfoInput>
  }

  export type CampaignUpdateWithoutPaymentInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    streaks?: StreakUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutPaymentInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    streaks?: StreakUncheckedUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutCampaignPaymentsInput = {
    update: XOR<UserUpdateWithoutCampaignPaymentsInput, UserUncheckedUpdateWithoutCampaignPaymentsInput>
    create: XOR<UserCreateWithoutCampaignPaymentsInput, UserUncheckedCreateWithoutCampaignPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignPaymentsInput, UserUncheckedUpdateWithoutCampaignPaymentsInput>
  }

  export type UserUpdateWithoutCampaignPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateWithoutDonationsInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCampaignsInput
    streaks?: StreakCreateNestedManyWithoutCampaignInput
    participations?: ParticipationCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentCreateNestedOneWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutDonationsInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    streaks?: StreakUncheckedCreateNestedManyWithoutCampaignInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutCampaignInput
    paymentInfo?: CampaignPaymentUncheckedCreateNestedOneWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutDonationsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
  }

  export type UserCreateWithoutDonationsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonationsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
  }

  export type CampaignUpsertWithoutDonationsInput = {
    update: XOR<CampaignUpdateWithoutDonationsInput, CampaignUncheckedUpdateWithoutDonationsInput>
    create: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutDonationsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutDonationsInput, CampaignUncheckedUpdateWithoutDonationsInput>
  }

  export type CampaignUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    streaks?: StreakUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    streaks?: StreakUncheckedUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type UserUpsertWithoutDonationsInput = {
    update: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSecurityEventsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutCreatorInput
    streaks?: StreakCreateNestedManyWithoutUserInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentCreateNestedManyWithoutPayerInput
  }

  export type UserUncheckedCreateWithoutSecurityEventsInput = {
    id?: string
    walletAddress: string
    fid: number
    username: string
    displayName?: string | null
    pfpUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signerUuid?: string | null
    isUuidApprove?: boolean | null
    signerRegDeadline?: Date | string | null
    signerPublicKey?: string | null
    signerApprovalUrl?: string | null
    role?: $Enums.UserRole
    isPremium?: boolean
    premiumExpiresAt?: Date | string | null
    dmsSentThisWeek?: number
    postsThisWeek?: number
    weekResetDate?: Date | string
    lastLoginAt?: Date | string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    lastNonceUsed?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatorInput
    streaks?: StreakUncheckedCreateNestedManyWithoutUserInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    campaignPayments?: CampaignPaymentUncheckedCreateNestedManyWithoutPayerInput
  }

  export type UserCreateOrConnectWithoutSecurityEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
  }

  export type UserUpsertWithoutSecurityEventsInput = {
    update: XOR<UserUpdateWithoutSecurityEventsInput, UserUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityEventsInput, UserUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type UserUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUpdateManyWithoutUserNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUpdateManyWithoutPayerNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    isUuidApprove?: NullableBoolFieldUpdateOperationsInput | boolean | null
    signerRegDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signerPublicKey?: NullableStringFieldUpdateOperationsInput | string | null
    signerApprovalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsSentThisWeek?: IntFieldUpdateOperationsInput | number
    postsThisWeek?: IntFieldUpdateOperationsInput | number
    weekResetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastNonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatorNestedInput
    streaks?: StreakUncheckedUpdateManyWithoutUserNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    campaignPayments?: CampaignPaymentUncheckedUpdateManyWithoutPayerNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: string
    signerUuid?: string | null
    text: string
    parent?: string | null
    channelId?: string | null
    parentAuthorFid?: number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: string | null
    status?: $Enums.PostStatus
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    qstashMessageId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationRuleCreateManyUserInput = {
    id?: string
    triggerWord: string
    response: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    timesTriggered?: number
    lastTriggered?: Date | string | null
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    details?: string | null
    timestamp?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type CampaignCreateManyCreatorInput = {
    id?: string
    name: string
    description: string
    category: string
    imageUrl?: string | null
    startDate: Date | string
    endDate: Date | string
    frequency?: $Enums.CampaignFrequency
    minStreakLength?: number
    contentRequirements?: string | null
    rewards?: string | null
    prizePool?: string | null
    totalDonations?: Decimal | DecimalJsLike | number | string
    donationGoal?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreakCreateManyUserInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type ParticipationCreateManyUserInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type DonationCreateManyDonorInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type CampaignPaymentCreateManyPayerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    recipientAddress: string
    verificationHash?: string | null
    nonceUsed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaignId: string
  }

  export type SecurityEventCreateManyUserInput = {
    id?: string
    eventType: $Enums.SecurityEventType
    description: string
    severity?: $Enums.SecuritySeverity
    ipAddress?: string | null
    userAgent?: string | null
    location?: string | null
    metadata?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    signerUuid?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    parentAuthorFid?: NullableIntFieldUpdateOperationsInput | number | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    postHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qstashMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationRuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AutomationRuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerWord?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timesTriggered?: IntFieldUpdateOperationsInput | number
    lastTriggered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streaks?: StreakUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUpdateManyWithoutCampaignNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streaks?: StreakUncheckedUpdateManyWithoutCampaignNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutCampaignNestedInput
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    paymentInfo?: CampaignPaymentUncheckedUpdateOneWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumCampaignFrequencyFieldUpdateOperationsInput | $Enums.CampaignFrequency
    minStreakLength?: IntFieldUpdateOperationsInput | number
    contentRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    rewards?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    totalDonations?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    donationGoal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutStreaksNestedInput
  }

  export type StreakUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type StreakUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignPaymentUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutPaymentInfoNestedInput
  }

  export type CampaignPaymentUncheckedUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignPaymentUncheckedUpdateManyWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    recipientAddress?: StringFieldUpdateOperationsInput | string
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    nonceUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumSecurityEventTypeFieldUpdateOperationsInput | $Enums.SecurityEventType
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumSecuritySeverityFieldUpdateOperationsInput | $Enums.SecuritySeverity
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateManyCampaignInput = {
    id?: string
    currentStreak?: number
    longestStreak?: number
    lastParticipationDate?: Date | string | null
    status?: $Enums.StreakStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ParticipationCreateManyCampaignInput = {
    id?: string
    contentTitle: string
    contentUrl?: string | null
    contentHash: string
    description?: string | null
    onchainTxHash?: string | null
    isVerified?: boolean
    submissionDate?: Date | string
    weekNumber: number
    status?: $Enums.ParticipationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type DonationCreateManyCampaignInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    message?: string | null
    txHash: string
    blockNumber?: number | null
    gasUsed?: number | null
    gasPrice?: string | null
    status?: $Enums.PaymentStatus
    creatorShare: Decimal | DecimalJsLike | number | string
    winnerShare: Decimal | DecimalJsLike | number | string
    isDistributed?: boolean
    distributionTxHash?: string | null
    verificationHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donorId: string
  }

  export type StreakUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStreaksNestedInput
  }

  export type StreakUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StreakUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastParticipationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStreakStatusFieldUpdateOperationsInput | $Enums.StreakStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipationUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentTitle?: StringFieldUpdateOperationsInput | string
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contentHash?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    onchainTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    submissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipationStatusFieldUpdateOperationsInput | $Enums.ParticipationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    blockNumber?: NullableIntFieldUpdateOperationsInput | number | null
    gasUsed?: NullableIntFieldUpdateOperationsInput | number | null
    gasPrice?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    creatorShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerShare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDistributed?: BoolFieldUpdateOperationsInput | boolean
    distributionTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}