/**
 * Basic information about the configuration of Kusk Core, as well as any
 * errors encountered when updating the local state of the blockchain
 *
 * More info: {}
 * @typedef {Object} CoreInfo
 *
 * @property {Boolean} listening whether the node is listening.
 * @property {Boolean} syncing whether the node is syncing.
 * @property {Boolean} mining whether the node is mining.
 * @property {Integer} peer_count current count of connected peers.
 * @property {Integer} current_block current block height in the node's blockchain.
 * @property {Integer} highest_block current highest block of the connected peers.
 * @property {String} network_id network id.
 * @property {Object} version_info kuskd version information:
 * @property {String} version current version of the running kuskd.
 * @property {uint16} update whether there exists an update.
 *                      0: no update;
 *                      1: small update;
 *                      2: significant update.
 * @property {String} new_version the newest version of kuskd if there is one.
 */

/**
 * Kusk Core can be configured as a new blockchain network, or as a node in an
 * existing blockchain network.
 *
 * More info: {}
 * API for interacting with {@link Config configs}.
 * @module ConfigApi
 */
const configAPI = (connection) => {
  return {
    /**
     * get gas rate
     * @returns {Promise} Promise resolved with gas rate on success.
     */
    gasRate: () => connection.request('/gas-rate', {}),


    /**
     * Get info on specified Kusk Core.
     *
     * @returns {Promise<CoreInfo>} Requested Net Info of specified Kusk Core.
     */
    netInfo: () => connection.request('/net-info',{}),

    /**
     *
     * @param params
     * @param {String} params.address address for account.
     * @param {String} params.derived_xpub derived xpub.
     * @param {String} params.message message for signature by derived_xpub.
     * @param {String} params.signature signature for message.
     * @returns {Promise<Object>} [Boolean] result, verify result.
     */
    verifyMessage: (params) => connection.request('verify-message', params)
  }
}

module.exports = configAPI