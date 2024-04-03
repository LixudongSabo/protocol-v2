import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { ISepoliaConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyLINK,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveConfig: ISepoliaConfiguration = {
  ...CommonsConfig,
  MarketId: 'Aave genesis market',
  ProviderId: 1,
  ReservesConfig: {
    LINK: strategyLINK,
  },
  ReserveAssets: {
    [eEthereumNetwork.sepolia]: {
      LINK: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
    },
    [eEthereumNetwork.goerli]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
  },
};

export default AaveConfig;
