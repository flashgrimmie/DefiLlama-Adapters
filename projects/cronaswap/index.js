const { staking } = require('../helper/staking')
const { getUniTVL } = require('../helper/unknownTokens')

module.exports={
    misrepresentedTokens: true,
    methodology: "Factory address (0x73A48f8f521EB31c55c0e1274dB0898dE599Cb11) is used to find the LP pairs. TVL is equal to the liquidity on the AMM, while staking is the amount of CRONA tokens found in the Masterchef(0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254).",
    cronos: {
      tvl: getUniTVL({
        chain: 'cronos',
        factory: '0x73A48f8f521EB31c55c0e1274dB0898dE599Cb11',
        coreAssets: [
          '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23', // wcro
        ],
        blacklist: [
          '0x5b5fe1238aca91c65683acd7f9d9bf922e271eaa', // SUS
        ]
      }),
        staking: staking("0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254", "0xadbd1231fb360047525BEdF962581F3eee7b49fe", 'cronos')
    }
}