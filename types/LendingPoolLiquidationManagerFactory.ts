/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { LendingPoolLiquidationManager } from "./LendingPoolLiquidationManager";

export class LendingPoolLiquidationManagerFactory extends ContractFactory {
  constructor(
    linkLibraryAddresses: LendingPoolLiquidationManagerLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      LendingPoolLiquidationManagerFactory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: LendingPoolLiquidationManagerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$7347ff53b2b46c21e26a37164ae7f6739f\\$__", "g"),
      linkLibraryAddresses["__$7347ff53b2b46c21e26a37164ae7f6739f$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: TransactionOverrides
  ): Promise<LendingPoolLiquidationManager> {
    return super.deploy(overrides) as Promise<LendingPoolLiquidationManager>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): LendingPoolLiquidationManager {
    return super.attach(address) as LendingPoolLiquidationManager;
  }
  connect(signer: Signer): LendingPoolLiquidationManagerFactory {
    return super.connect(signer) as LendingPoolLiquidationManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolLiquidationManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolLiquidationManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_collateral",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_purchaseAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_liquidatedCollateralAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_liquidator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_receiveAToken",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "LiquidationCall",
    type: "event"
  },
  {
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address"
      },
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_purchaseAmount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_receiveAToken",
        type: "bool"
      }
    ],
    name: "liquidationCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "reservesList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b50600160005561170c8061002a6000396000f3fe6080604052600436106100335760003560e01c8062a718a9146100385780634fe7a6e5146100fb578063c72c4d1014610141575b600080fd5b61007c600480360360a081101561004e57600080fd5b506001600160a01b038135811691602081013582169160408201351690606081013590608001351515610156565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156100bf5781810151838201526020016100a7565b50505050905090810190601f1680156100ec5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561010757600080fd5b506101256004803603602081101561011e57600080fd5b503561094b565b604080516001600160a01b039092168252519081900360200190f35b34801561014d57600080fd5b50610125610972565b6001600160a01b0380851660009081526037602090815260408083208985168085528285209589168552603884528285209085529092528220919260609261019c6114d0565b73__$7347ff53b2b46c21e26a37164ae7f6739f$__6392eeb05c8a603760386039603560009054906101000a90046001600160a01b03166001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b15801561020b57600080fd5b505afa15801561021f573d6000803e3d6000fd5b505050506040513d602081101561023557600080fd5b50516040516001600160e01b031960e088901b1681526001600160a01b03808716600483019081526024830187905260448301869052908316608483015260a060648301908152845460a484018190529192909160c490910190859080156102c657602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102a8575b5050965050505050505060c06040518083038186803b1580156102e857600080fd5b505af41580156102fc573d6000803e3d6000fd5b505050506040513d60c081101561031257600080fd5b5060a001516101c08201819052670de0b6b3a764000011610355576004604051806060016040528060288152602001611685602891399550955050505050610941565b6009830154604080516370a0823160e01b81526001600160a01b038c81166004830152915191909216916370a08231916024808301926020929190829003018186803b1580156103a457600080fd5b505afa1580156103b8573d6000803e3d6000fd5b505050506040513d60208110156103ce57600080fd5b505180825261041c5760016040518060400160405280601f81526020017f496e76616c696420636f6c6c61746572616c20746f206c6971756964617465008152509550955050505050610941565b600c830154600160d01b900460ff1680156104385750815460ff165b1515610200820181905261046e5760026040518060600160405280602a8152602001611631602a91399550955050505050610941565b6104788985610981565b60408301526020820181905215801561049357506040810151155b156104c05760036040518060600160405280602a81526020016116ad602a91399550955050505050610941565b6104fd60646104f160326104e585604001518660200151610a8490919063ffffffff16565b9063ffffffff610ae716565b9063ffffffff610b4016565b6060820181905288116105105787610516565b80606001515b60808201819052815161053191859187918f918f9190610b82565b6101a0830181905261018083019190915260808201511115610559576101a081015160808201525b866105b35760006105796001600160a01b038d163063ffffffff610df316565b90508161018001518110156105b15760056040518060600160405280603381526020016115fe60339139965096505050505050610941565b505b806080015181604001511061063c57600b840154608082015160408051632770a7eb60e21b81526001600160a01b038d81166004830152602482019390935290519190921691639dc29fac91604480830192600092919082900301818387803b15801561061f57600080fd5b505af1158015610633573d6000803e3d6000fd5b50505050610743565b600b8401546040808301518151632770a7eb60e21b81526001600160a01b038d8116600483015260248201929092529151921691639dc29fac9160448082019260009290919082900301818387803b15801561069757600080fd5b505af11580156106ab573d6000803e3d6000fd5b50505050600a840154604082015160808301516001600160a01b0390921691639dc29fac918c916106db91610e9d565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561072a57600080fd5b505af115801561073e573d6000803e3d6000fd5b505050505b60098301546001600160a01b03166101e082015286156107df576101e08101516101808201516040805163f866c31960e01b81526001600160a01b038d8116600483015233602483015260448201939093529051919092169163f866c31991606480830192600092919082900301818387803b1580156107c257600080fd5b505af11580156107d6573d6000803e3d6000fd5b50505050610883565b806101e001516001600160a01b0316633edb7cb88a8361018001516040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561084957600080fd5b505af115801561085d573d6000803e3d6000fd5b50505061018082015161088391506001600160a01b038d1690339063ffffffff610edf16565b60808101516108a4906001600160a01b038c1690600163ffffffff610fbd16565b60808082015161018083015160408051928352602083019190915233828201528915156060830152429282019290925290516001600160a01b03808c16928d821692918f16917f54343dd5791108d018f6fb8def2c14d746f777c51e9924962237813a527528709181900360a00190a46000604051806040016040528060098152602001684e6f206572726f727360b81b81525095509550505050505b9550959350505050565b6039818154811061095857fe5b6000918252602090912001546001600160a01b0316905081565b6035546001600160a01b031681565b600a810154604080516370a0823160e01b81526001600160a01b0385811660048301529151600093849316916370a08231916024808301926020929190829003018186803b1580156109d257600080fd5b505afa1580156109e6573d6000803e3d6000fd5b505050506040513d60208110156109fc57600080fd5b5051600b840154604080516370a0823160e01b81526001600160a01b038881166004830152915191909216916370a08231916024808301926020929190829003018186803b158015610a4d57600080fd5b505afa158015610a61573d6000803e3d6000fd5b505050506040513d6020811015610a7757600080fd5b5051909590945092505050565b600082820183811015610ade576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600082610af657506000610ae1565b82820282848281610b0357fe5b0414610ade5760405162461bcd60e51b81526004018080602001828103825260218152602001806115dd6021913960400191505060405180910390fd5b6000610ade83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061108f565b60355460408051631f94a27560e31b81529051600092839283926001600160a01b039092169163fca513a891600480820192602092909190829003018186803b158015610bce57600080fd5b505afa158015610be2573d6000803e3d6000fd5b505050506040513d6020811015610bf857600080fd5b50519050610c0461156a565b816001600160a01b031663b3596f07896040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610c5a57600080fd5b505afa158015610c6e573d6000803e3d6000fd5b505050506040513d6020811015610c8457600080fd5b5051604080830191909152805163b3596f0760e01b81526001600160a01b03898116600483015291519184169163b3596f0791602480820192602092909190829003018186803b158015610cd757600080fd5b505afa158015610ceb573d6000803e3d6000fd5b505050506040513d6020811015610d0157600080fd5b5051606082015260078a0154602082018190526008808b015460a08401819052908c015460c08401526040830151610d73926064926104f1926104e591610d519190600a0a63ffffffff610ae716565b6104f18760c00151600a0a6104e58e8a60600151610ae790919063ffffffff16565b60808201819052851015610ddb57849350610dd481602001516104f160646104e5610db28660c00151600a0a8760600151610ae790919063ffffffff16565b6104f18760a00151600a0a6104e58c8a60400151610ae790919063ffffffff16565b9250610de6565b806080015193508592505b5050965096945050505050565b6000610dfe83611131565b15610e1457506001600160a01b03811631610ae1565b826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610e6a57600080fd5b505afa158015610e7e573d6000803e3d6000fd5b505050506040513d6020811015610e9457600080fd5b50519050610ae1565b6000610ade83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611156565b80610ee957610fb8565b610ef283611131565b15610f9e576040516000906001600160a01b0384169061c35090849084818181858888f193505050503d8060008114610f47576040519150601f19603f3d011682016040523d82523d6000602084013e610f4c565b606091505b5050905080610f98576040805162461bcd60e51b815260206004820152601360248201527211551217d514905394d1915497d19052531151606a1b604482015290519081900360640190fd5b50610fb8565b610fb86001600160a01b038416838363ffffffff6111b016565b505050565b81610fc757610fb8565b610fd083611131565b1561107457813410156110145760405162461bcd60e51b81526004018080602001828103825260358152602001806115a86035913960400191505060405180910390fd5b801561106f5760003361102d348563ffffffff610e9d16565b60405161c35091906000818181858888f193505050503d8060008114610f47576040519150601f19603f3d011682016040523d82523d6000602084013e610f4c565b610fb8565b610fb86001600160a01b03841633308563ffffffff61120216565b6000818361111b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156110e05781810151838201526020016110c8565b50505050905090810190601f16801561110d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161112757fe5b0495945050505050565b6001600160a01b03811673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14919050565b600081848411156111a85760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156110e05781810151838201526020016110c8565b505050900390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610fb8908490611262565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261125c908590611262565b50505050565b60606112b7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113139092919063ffffffff16565b805190915015610fb8578080602001905160208110156112d657600080fd5b5051610fb85760405162461bcd60e51b815260040180806020018281038252602a81526020018061165b602a913960400191505060405180910390fd5b6060611322848460008561132a565b949350505050565b606061133585611497565b611386576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106113c55780518252601f1990920191602091820191016113a6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611427576040519150601f19603f3d011682016040523d82523d6000602084013e61142c565b606091505b509150915081156114405791506113229050565b8051156114505780518082602001fd5b60405162461bcd60e51b81526020600482018181528651602484015286518793919283926044019190850190808383600083156110e05781810151838201526020016110c8565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611322575050151592915050565b604051806102200160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000600281111561152f57fe5b81526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000151581525090565b6040518060e0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152509056fe54686520616d6f756e7420616e64207468652076616c75652073656e7420746f206465706f73697420646f206e6f74206d61746368536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7754686572652069736e277420656e6f756768206c697175696469747920617661696c61626c6520746f206c697175696461746554686520636f6c6c61746572616c2063686f73656e2063616e6e6f74206265206c6971756964617465645361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565644865616c746820666163746f72206973206e6f742062656c6f7720746865207468726573686f6c645573657220646964206e6f7420626f72726f7720746865207370656369666965642063757272656e6379a2646970667358221220d221dba87455e35dd29421fd2351c8cc1e9c9ec55aa63aab1f1d5e6533d1989964736f6c63430006080033";

export interface LendingPoolLiquidationManagerLibraryAddresses {
  ["__$7347ff53b2b46c21e26a37164ae7f6739f$__"]: string;
}