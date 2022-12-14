/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface CharityRaffleInterface extends utils.Interface {
  functions: {
    "DonationMatch()": FunctionFragment;
    "checkUpkeep(bytes)": FunctionFragment;
    "enterRaffle(uint256)": FunctionFragment;
    "fundDonationMatch()": FunctionFragment;
    "getAllPlayers()": FunctionFragment;
    "getCharities()": FunctionFragment;
    "getCharityWinner()": FunctionFragment;
    "getDonations(address)": FunctionFragment;
    "getDuration()": FunctionFragment;
    "getEntranceFee()": FunctionFragment;
    "getFundingWallet()": FunctionFragment;
    "getHighestDonations()": FunctionFragment;
    "getJackpot()": FunctionFragment;
    "getNumWords()": FunctionFragment;
    "getNumberOfPlayers()": FunctionFragment;
    "getPlayer(uint256)": FunctionFragment;
    "getRaffleState()": FunctionFragment;
    "getRecentWinner()": FunctionFragment;
    "getRequestConfirmations()": FunctionFragment;
    "getStartTime()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DonationMatch"
      | "checkUpkeep"
      | "enterRaffle"
      | "fundDonationMatch"
      | "getAllPlayers"
      | "getCharities"
      | "getCharityWinner"
      | "getDonations"
      | "getDuration"
      | "getEntranceFee"
      | "getFundingWallet"
      | "getHighestDonations"
      | "getJackpot"
      | "getNumWords"
      | "getNumberOfPlayers"
      | "getPlayer"
      | "getRaffleState"
      | "getRecentWinner"
      | "getRequestConfirmations"
      | "getStartTime"
      | "performUpkeep"
      | "rawFulfillRandomWords"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DonationMatch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enterRaffle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundDonationMatch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCharities",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCharityWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDonations",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntranceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFundingWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHighestDonations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getJackpot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaffleState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecentWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "DonationMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterRaffle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundDonationMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPlayers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCharities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCharityWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntranceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFundingWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHighestDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getJackpot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfPlayers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPlayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRaffleState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecentWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;

  events: {
    "CharityWinnerPicked(address)": EventFragment;
    "RaffleEnter(address)": EventFragment;
    "RequestedRaffleWinner(uint256)": EventFragment;
    "WinnerPicked(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CharityWinnerPicked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RaffleEnter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestedRaffleWinner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WinnerPicked"): EventFragment;
}

export interface CharityWinnerPickedEventObject {
  charity: string;
}
export type CharityWinnerPickedEvent = TypedEvent<
  [string],
  CharityWinnerPickedEventObject
>;

export type CharityWinnerPickedEventFilter =
  TypedEventFilter<CharityWinnerPickedEvent>;

export interface RaffleEnterEventObject {
  player: string;
}
export type RaffleEnterEvent = TypedEvent<[string], RaffleEnterEventObject>;

export type RaffleEnterEventFilter = TypedEventFilter<RaffleEnterEvent>;

export interface RequestedRaffleWinnerEventObject {
  requestId: BigNumber;
}
export type RequestedRaffleWinnerEvent = TypedEvent<
  [BigNumber],
  RequestedRaffleWinnerEventObject
>;

export type RequestedRaffleWinnerEventFilter =
  TypedEventFilter<RequestedRaffleWinnerEvent>;

export interface WinnerPickedEventObject {
  player: string;
}
export type WinnerPickedEvent = TypedEvent<[string], WinnerPickedEventObject>;

export type WinnerPickedEventFilter = TypedEventFilter<WinnerPickedEvent>;

export interface CharityRaffle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CharityRaffleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DonationMatch(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    enterRaffle(
      charityChoice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fundDonationMatch(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllPlayers(overrides?: CallOverrides): Promise<[string[]]>;

    getCharities(overrides?: CallOverrides): Promise<[string[]]>;

    getCharityWinner(overrides?: CallOverrides): Promise<[string]>;

    getDonations(
      charity: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEntranceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFundingWallet(overrides?: CallOverrides): Promise<[string]>;

    getHighestDonations(overrides?: CallOverrides): Promise<[BigNumber]>;

    getJackpot(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumWords(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumberOfPlayers(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPlayer(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRaffleState(overrides?: CallOverrides): Promise<[number]>;

    getRecentWinner(overrides?: CallOverrides): Promise<[string]>;

    getRequestConfirmations(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DonationMatch(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkUpkeep(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  enterRaffle(
    charityChoice: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fundDonationMatch(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllPlayers(overrides?: CallOverrides): Promise<string[]>;

  getCharities(overrides?: CallOverrides): Promise<string[]>;

  getCharityWinner(overrides?: CallOverrides): Promise<string>;

  getDonations(charity: string, overrides?: CallOverrides): Promise<BigNumber>;

  getDuration(overrides?: CallOverrides): Promise<BigNumber>;

  getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

  getFundingWallet(overrides?: CallOverrides): Promise<string>;

  getHighestDonations(overrides?: CallOverrides): Promise<BigNumber>;

  getJackpot(overrides?: CallOverrides): Promise<BigNumber>;

  getNumWords(overrides?: CallOverrides): Promise<BigNumber>;

  getNumberOfPlayers(overrides?: CallOverrides): Promise<BigNumber>;

  getPlayer(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getRaffleState(overrides?: CallOverrides): Promise<number>;

  getRecentWinner(overrides?: CallOverrides): Promise<string>;

  getRequestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

  getStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  performUpkeep(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DonationMatch(overrides?: CallOverrides): Promise<void>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    enterRaffle(
      charityChoice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fundDonationMatch(overrides?: CallOverrides): Promise<void>;

    getAllPlayers(overrides?: CallOverrides): Promise<string[]>;

    getCharities(overrides?: CallOverrides): Promise<string[]>;

    getCharityWinner(overrides?: CallOverrides): Promise<string>;

    getDonations(
      charity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getFundingWallet(overrides?: CallOverrides): Promise<string>;

    getHighestDonations(overrides?: CallOverrides): Promise<BigNumber>;

    getJackpot(overrides?: CallOverrides): Promise<BigNumber>;

    getNumWords(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfPlayers(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayer(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getRaffleState(overrides?: CallOverrides): Promise<number>;

    getRecentWinner(overrides?: CallOverrides): Promise<string>;

    getRequestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    getStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CharityWinnerPicked(address)"(
      charity?: string | null
    ): CharityWinnerPickedEventFilter;
    CharityWinnerPicked(
      charity?: string | null
    ): CharityWinnerPickedEventFilter;

    "RaffleEnter(address)"(player?: string | null): RaffleEnterEventFilter;
    RaffleEnter(player?: string | null): RaffleEnterEventFilter;

    "RequestedRaffleWinner(uint256)"(
      requestId?: BigNumberish | null
    ): RequestedRaffleWinnerEventFilter;
    RequestedRaffleWinner(
      requestId?: BigNumberish | null
    ): RequestedRaffleWinnerEventFilter;

    "WinnerPicked(address)"(player?: string | null): WinnerPickedEventFilter;
    WinnerPicked(player?: string | null): WinnerPickedEventFilter;
  };

  estimateGas: {
    DonationMatch(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    enterRaffle(
      charityChoice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fundDonationMatch(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllPlayers(overrides?: CallOverrides): Promise<BigNumber>;

    getCharities(overrides?: CallOverrides): Promise<BigNumber>;

    getCharityWinner(overrides?: CallOverrides): Promise<BigNumber>;

    getDonations(
      charity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getFundingWallet(overrides?: CallOverrides): Promise<BigNumber>;

    getHighestDonations(overrides?: CallOverrides): Promise<BigNumber>;

    getJackpot(overrides?: CallOverrides): Promise<BigNumber>;

    getNumWords(overrides?: CallOverrides): Promise<BigNumber>;

    getNumberOfPlayers(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayer(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaffleState(overrides?: CallOverrides): Promise<BigNumber>;

    getRecentWinner(overrides?: CallOverrides): Promise<BigNumber>;

    getRequestConfirmations(overrides?: CallOverrides): Promise<BigNumber>;

    getStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DonationMatch(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enterRaffle(
      charityChoice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fundDonationMatch(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllPlayers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCharities(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCharityWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDonations(
      charity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntranceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFundingWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHighestDonations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getJackpot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumWords(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumberOfPlayers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayer(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaffleState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecentWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequestConfirmations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
