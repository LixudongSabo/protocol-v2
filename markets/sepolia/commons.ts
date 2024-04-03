import {
  oneRay,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneEther,
} from '../../helpers/constants';
import { ICommonConfiguration, eEthereumNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave interest bearing',
  StableDebtTokenNamePrefix: 'Aave stable debt bearing',
  VariableDebtTokenNamePrefix: 'Aave variable debt bearing',
  SymbolPrefix: '',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x73d219B3881E481394DA6B5008A081d623992200',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    LINK: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eEthereumNetwork.sepolia]: '0x9dA90D7d0e45abE7FF3f9135f8E3a2a14Ad5bD82',
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderly]: undefined,
    [eEthereumNetwork.goerli]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eEthereumNetwork.sepolia]: '0x9dA90D7d0e45abE7FF3f9135f8E3a2a14Ad5bD82',
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderly]: undefined,
    [eEthereumNetwork.goerli]: undefined,
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eEthereumNetwork.sepolia]: '0x8545CeED0F4a5fd09d3Ca3483C03c06ecdc6a060',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  ProviderRegistryOwner: {
    [eEthereumNetwork.sepolia]: '0x9dA90D7d0e45abE7FF3f9135f8E3a2a14Ad5bD82',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  LendingRateOracle: {
    [eEthereumNetwork.sepolia]: '0xD3294149015926B41A83D9c8ac9cfaBae6A4A0D8',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  LendingPoolCollateralManager: {
    [eEthereumNetwork.sepolia]: '0x9E863B1940A509820d798C27C2C6BA020C1f2847',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  LendingPoolConfigurator: {
    [eEthereumNetwork.sepolia]: '0x4f5da8d5D3Af02dcbA6631EAcF15cF80dE4f2541',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  LendingPool: {
    [eEthereumNetwork.sepolia]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  WethGateway: {
    [eEthereumNetwork.sepolia]: '0xD0c90258438F7d0987390f5B088C961248dDF549',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  TokenDistributor: {
    [eEthereumNetwork.sepolia]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  AaveOracle: {
    [eEthereumNetwork.sepolia]: '0x7a6E24B9c476F1030ea98f160d892b940fc2E00E',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  FallbackOracle: {
    [eEthereumNetwork.sepolia]: ZERO_ADDRESS,
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x50913E8E1c650E790F8a1E741FF9B1B1bB251dfe',
    [eEthereumNetwork.ropsten]: '0xAD1a978cdbb8175b2eaeC47B01404f8AEC5f4F0d',
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderly]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: '',
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.sepolia]: {
      LINK: '0x42585eD362B3f1BCa95c640FdFf35Ef899212734',
    },
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.goerli]: {},
  },
  ReserveAssets: {
    [eEthereumNetwork.sepolia]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.goerli]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eEthereumNetwork.sepolia]: '',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  WETH: {
    [eEthereumNetwork.sepolia]: '0xD0c90258438F7d0987390f5B088C961248dDF549',
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  WrappedNativeToken: {
    [eEthereumNetwork.sepolia]: '0x844372F6Dfb12A4f9c96226CCd8C10503C2748fC',
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.sepolia]: ZERO_ADDRESS,
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  IncentivesController: {
    [eEthereumNetwork.sepolia]: ZERO_ADDRESS,
    [eEthereumNetwork.coverage]: ZERO_ADDRESS,
    [eEthereumNetwork.hardhat]: ZERO_ADDRESS,
    [eEthereumNetwork.buidlerevm]: ZERO_ADDRESS,
    [eEthereumNetwork.kovan]: ZERO_ADDRESS,
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderly]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: ZERO_ADDRESS,
  },
};
