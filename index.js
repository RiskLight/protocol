'use strict'

const core = Object.freeze({
  LDAP_VERSION_3: 0x03,
  LBER_SET: 0x31,
  LDAP_CONTROLS: 0xa0
})

const operations = Object.freeze({
  LDAP_REQ_BIND: 0x60,
  LDAP_REQ_UNBIND: 0x42,
  LDAP_REQ_SEARCH: 0x63,
  LDAP_REQ_MODIFY: 0x66,
  LDAP_REQ_ADD: 0x68,
  LDAP_REQ_DELETE: 0x4a,
  LDAP_REQ_MODRDN: 0x6c,
  LDAP_REQ_COMPARE: 0x6e,
  LDAP_REQ_ABANDON: 0x50,
  LDAP_REQ_EXTENSION: 0x77,

  LDAP_RES_BIND: 0x61,
  LDAP_RES_SEARCH_ENTRY: 0x64,
  LDAP_RES_SEARCH_DONE: 0x65,
  LDAP_RES_SEARCH_REF: 0x73,
  LDAP_RES_SEARCH: 0x65,
  LDAP_RES_MODIFY: 0x67,
  LDAP_RES_ADD: 0x69,
  LDAP_RES_DELETE: 0x6b,
  LDAP_RES_MODRDN: 0x6d,
  LDAP_RES_COMPARE: 0x6f,
  LDAP_RES_EXTENSION: 0x78,
  LDAP_RES_INTERMEDIATE: 0x79
})

/**
 * Value constants and ASN.1 tags as defined in:
 * https://datatracker.ietf.org/doc/html/rfc4511#section-4.5.1
 */
const search = Object.freeze({
  SCOPE_BASE_OBJECT: 0,
  SCOPE_ONE_LEVEL: 1,
  SCOPE_SUBTREE: 2,

  NEVER_DEREF_ALIASES: 0,
  DEREF_IN_SEARCHING: 1,
  DEREF_BASE_OBJECT: 2,
  DEREF_ALWAYS: 3,

  FILTER_AND: 0xa0,
  FILTER_OR: 0xa1,
  FILTER_NOT: 0xa2,
  FILTER_EQUALITY: 0xa3,
  FILTER_SUBSTRINGS: 0xa4,
  FILTER_GE: 0xa5,
  FILTER_LE: 0xa6,
  FILTER_PRESENT: 0x87,
  FILTER_APPROX: 0xa8,
  FILTER_EXT: 0xa9
})

module.exports = Object.freeze({ core, operations, search })
