/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCountryInput = {
  id?: string | null;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  _version?: number | null;
};

export type ModelCountryConditionInput = {
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  name?: ModelStringInput | null;
  iso31661a2?: ModelStringInput | null;
  iso31661a3?: ModelStringInput | null;
  iso31661n?: ModelIntInput | null;
  coordinates?: ModelFloatInput | null;
  continent?: ModelStringInput | null;
  flagIcon?: ModelStringInput | null;
  flagSvg?: ModelStringInput | null;
  domain?: ModelStringInput | null;
  tzName?: ModelStringInput | null;
  geoJson?: ModelStringInput | null;
  landlocked?: ModelBooleanInput | null;
  borders?: ModelStringInput | null;
  area?: ModelIntInput | null;
  demonyms?: ModelStringInput | null;
  dialCode?: ModelStringInput | null;
  wikiLink?: ModelStringInput | null;
  icaoArpt?: ModelStringInput | null;
  icaoTail?: ModelStringInput | null;
  e164?: ModelStringInput | null;
  ioc?: ModelStringInput | null;
  e212?: ModelStringInput | null;
  natoa3?: ModelStringInput | null;
  natoa2?: ModelStringInput | null;
  locMarc?: ModelStringInput | null;
  ituMid?: ModelStringInput | null;
  itu3a?: ModelStringInput | null;
  ituPreffix?: ModelStringInput | null;
  fips?: ModelStringInput | null;
  plate?: ModelStringInput | null;
  gs1?: ModelStringInput | null;
  undp?: ModelStringInput | null;
  wmo?: ModelStringInput | null;
  and?: Array<ModelCountryConditionInput | null> | null;
  or?: Array<ModelCountryConditionInput | null> | null;
  not?: ModelCountryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Country = {
  __typename: "Country";
  id?: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: ModelWxReportHistoryConnection;
  countryWxR?: ModelWxReportConnection;
  countryArpt?: ModelAirportConnection;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelWxReportHistoryConnection = {
  __typename: "ModelWxReportHistoryConnection";
  items?: Array<WxReportHistory | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type WxReportHistory = {
  __typename: "WxReportHistory";
  id?: string;
  createAt?: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID?: string;
  airportID?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export enum ReportType {
  METAR = "METAR",
  TAF = "TAF",
  SIGMET = "SIGMET",
  TC = "TC",
  ICING = "ICING",
  WINDS = "WINDS"
}

export type ModelWxReportConnection = {
  __typename: "ModelWxReportConnection";
  items?: Array<WxReport | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type WxReport = {
  __typename: "WxReport";
  id?: string;
  createAt?: string;
  createAtTS?: number | null;
  isoDate?: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID?: string;
  airportID?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export enum ArptCode {
  ICAO = "ICAO",
  IATA = "IATA",
  FAA = "FAA"
}

export type ModelAirportConnection = {
  __typename: "ModelAirportConnection";
  items?: Array<Airport | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Airport = {
  __typename: "Airport";
  id?: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: ModelWxReportHistoryConnection;
  arptWxR?: ModelWxReportConnection;
  countryID?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateCountryInput = {
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  _version?: number | null;
};

export type DeleteCountryInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateAirportInput = {
  id?: string | null;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  countryID: string;
  _version?: number | null;
};

export type ModelAirportConditionInput = {
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  iso31661a2?: ModelStringInput | null;
  icao?: ModelStringInput | null;
  iata?: ModelStringInput | null;
  faa?: ModelStringInput | null;
  name?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  elevation?: ModelIntInput | null;
  tz_name?: ModelStringInput | null;
  coordinates?: ModelFloatInput | null;
  countryID?: ModelIDInput | null;
  and?: Array<ModelAirportConditionInput | null> | null;
  or?: Array<ModelAirportConditionInput | null> | null;
  not?: ModelAirportConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateAirportInput = {
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  countryID?: string | null;
  _version?: number | null;
};

export type DeleteAirportInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateWxReportHistoryInput = {
  id?: string | null;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version?: number | null;
};

export type ModelWxReportHistoryConditionInput = {
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  isoDate?: ModelStringInput | null;
  tsDate?: ModelIntInput | null;
  countryIso31661a2?: ModelStringInput | null;
  icao?: ModelStringInput | null;
  faa?: ModelStringInput | null;
  reportType?: ModelReportTypeInput | null;
  raw?: ModelStringInput | null;
  countryID?: ModelIDInput | null;
  airportID?: ModelIDInput | null;
  and?: Array<ModelWxReportHistoryConditionInput | null> | null;
  or?: Array<ModelWxReportHistoryConditionInput | null> | null;
  not?: ModelWxReportHistoryConditionInput | null;
};

export type ModelReportTypeInput = {
  eq?: ReportType | null;
  ne?: ReportType | null;
};

export type UpdateWxReportHistoryInput = {
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID?: string | null;
  airportID?: string | null;
  _version?: number | null;
};

export type DeleteWxReportHistoryInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateWxReportInput = {
  id?: string | null;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version?: number | null;
};

export type ModelWxReportConditionInput = {
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  isoDate?: ModelStringInput | null;
  tsDate?: ModelIntInput | null;
  ttl?: ModelIntInput | null;
  countryIso31661a2?: ModelStringInput | null;
  arptCode?: ModelArptCodeInput | null;
  reportType?: ModelReportTypeInput | null;
  raw?: ModelStringInput | null;
  countryID?: ModelIDInput | null;
  airportID?: ModelIDInput | null;
  and?: Array<ModelWxReportConditionInput | null> | null;
  or?: Array<ModelWxReportConditionInput | null> | null;
  not?: ModelWxReportConditionInput | null;
};

export type ModelArptCodeInput = {
  eq?: ArptCode | null;
  ne?: ArptCode | null;
};

export type UpdateWxReportInput = {
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID?: string | null;
  airportID?: string | null;
  _version?: number | null;
};

export type DeleteWxReportInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreatePrivateLogbookInput = {
  id?: string | null;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version?: number | null;
};

export type ModelPrivateLogbookConditionInput = {
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  fltDate?: ModelStringInput | null;
  code?: ModelStringInput | null;
  nflt?: ModelStringInput | null;
  dep?: ModelStringInput | null;
  arr?: ModelStringInput | null;
  dhd?: ModelBooleanInput | null;
  augmented?: ModelBooleanInput | null;
  training?: ModelBooleanInput | null;
  dBlockTime?: ModelFloatInput | null;
  hBlockTime?: ModelStringInput | null;
  fCrew?: ModelIDInput | null;
  cCrew?: ModelIDInput | null;
  and?: Array<ModelPrivateLogbookConditionInput | null> | null;
  or?: Array<ModelPrivateLogbookConditionInput | null> | null;
  not?: ModelPrivateLogbookConditionInput | null;
};

export type PrivateLogbook = {
  __typename: "PrivateLogbook";
  id?: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePrivateLogbookInput = {
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version?: number | null;
};

export type DeletePrivateLogbookInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreatePilotInput = {
  id?: string | null;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version?: number | null;
};

export type ModelPilotConditionInput = {
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  fullName?: ModelStringInput | null;
  name?: ModelStringInput | null;
  middleName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  and?: Array<ModelPilotConditionInput | null> | null;
  or?: Array<ModelPilotConditionInput | null> | null;
  not?: ModelPilotConditionInput | null;
};

export type Pilot = {
  __typename: "Pilot";
  id?: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePilotInput = {
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version?: number | null;
};

export type DeletePilotInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateNotamQ23Input = {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version?: number | null;
};

export type ModelNotamQ23ConditionInput = {
  category?: ModelStringInput | null;
  code?: ModelStringInput | null;
  description?: ModelStringInput | null;
  level?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  and?: Array<ModelNotamQ23ConditionInput | null> | null;
  or?: Array<ModelNotamQ23ConditionInput | null> | null;
  not?: ModelNotamQ23ConditionInput | null;
};

export type NotamQ23 = {
  __typename: "NotamQ23";
  id?: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateNotamQ23Input = {
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version?: number | null;
};

export type DeleteNotamQ23Input = {
  id?: string | null;
  _version?: number | null;
};

export type CreateNotamQ45Input = {
  id?: string | null;
  code?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type ModelNotamQ45ConditionInput = {
  code?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelNotamQ45ConditionInput | null> | null;
  or?: Array<ModelNotamQ45ConditionInput | null> | null;
  not?: ModelNotamQ45ConditionInput | null;
};

export type NotamQ45 = {
  __typename: "NotamQ45";
  id?: string;
  code?: string | null;
  description?: string | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateNotamQ45Input = {
  id: string;
  code?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type DeleteNotamQ45Input = {
  id?: string | null;
  _version?: number | null;
};

export type CreateIcaoAbbreviationsCodesInput = {
  id?: string | null;
  code?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type ModelIcaoAbbreviationsCodesConditionInput = {
  code?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelIcaoAbbreviationsCodesConditionInput | null> | null;
  or?: Array<ModelIcaoAbbreviationsCodesConditionInput | null> | null;
  not?: ModelIcaoAbbreviationsCodesConditionInput | null;
};

export type IcaoAbbreviationsCodes = {
  __typename: "IcaoAbbreviationsCodes";
  id?: string;
  code?: string | null;
  description?: string | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateIcaoAbbreviationsCodesInput = {
  id: string;
  code?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type DeleteIcaoAbbreviationsCodesInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  nickname?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  idPublic?: ModelStringInput | null;
  idPrivate?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id?: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateUserInput = {
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelCountryFilterInput = {
  id?: ModelIDInput | null;
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  name?: ModelStringInput | null;
  iso31661a2?: ModelStringInput | null;
  iso31661a3?: ModelStringInput | null;
  iso31661n?: ModelIntInput | null;
  coordinates?: ModelFloatInput | null;
  continent?: ModelStringInput | null;
  flagIcon?: ModelStringInput | null;
  flagSvg?: ModelStringInput | null;
  domain?: ModelStringInput | null;
  tzName?: ModelStringInput | null;
  geoJson?: ModelStringInput | null;
  landlocked?: ModelBooleanInput | null;
  borders?: ModelStringInput | null;
  area?: ModelIntInput | null;
  demonyms?: ModelStringInput | null;
  dialCode?: ModelStringInput | null;
  wikiLink?: ModelStringInput | null;
  icaoArpt?: ModelStringInput | null;
  icaoTail?: ModelStringInput | null;
  e164?: ModelStringInput | null;
  ioc?: ModelStringInput | null;
  e212?: ModelStringInput | null;
  natoa3?: ModelStringInput | null;
  natoa2?: ModelStringInput | null;
  locMarc?: ModelStringInput | null;
  ituMid?: ModelStringInput | null;
  itu3a?: ModelStringInput | null;
  ituPreffix?: ModelStringInput | null;
  fips?: ModelStringInput | null;
  plate?: ModelStringInput | null;
  gs1?: ModelStringInput | null;
  undp?: ModelStringInput | null;
  wmo?: ModelStringInput | null;
  and?: Array<ModelCountryFilterInput | null> | null;
  or?: Array<ModelCountryFilterInput | null> | null;
  not?: ModelCountryFilterInput | null;
};

export type ModelCountryConnection = {
  __typename: "ModelCountryConnection";
  items?: Array<Country | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAirportFilterInput = {
  id?: ModelIDInput | null;
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  iso31661a2?: ModelStringInput | null;
  icao?: ModelStringInput | null;
  iata?: ModelStringInput | null;
  faa?: ModelStringInput | null;
  name?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  elevation?: ModelIntInput | null;
  tz_name?: ModelStringInput | null;
  coordinates?: ModelFloatInput | null;
  countryID?: ModelIDInput | null;
  and?: Array<ModelAirportFilterInput | null> | null;
  or?: Array<ModelAirportFilterInput | null> | null;
  not?: ModelAirportFilterInput | null;
};

export type ModelWxReportHistoryFilterInput = {
  id?: ModelIDInput | null;
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  isoDate?: ModelStringInput | null;
  tsDate?: ModelIntInput | null;
  countryIso31661a2?: ModelStringInput | null;
  icao?: ModelStringInput | null;
  faa?: ModelStringInput | null;
  reportType?: ModelReportTypeInput | null;
  raw?: ModelStringInput | null;
  countryID?: ModelIDInput | null;
  airportID?: ModelIDInput | null;
  and?: Array<ModelWxReportHistoryFilterInput | null> | null;
  or?: Array<ModelWxReportHistoryFilterInput | null> | null;
  not?: ModelWxReportHistoryFilterInput | null;
};

export type ModelWxReportFilterInput = {
  id?: ModelIDInput | null;
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  isoDate?: ModelStringInput | null;
  tsDate?: ModelIntInput | null;
  ttl?: ModelIntInput | null;
  countryIso31661a2?: ModelStringInput | null;
  arptCode?: ModelArptCodeInput | null;
  reportType?: ModelReportTypeInput | null;
  raw?: ModelStringInput | null;
  countryID?: ModelIDInput | null;
  airportID?: ModelIDInput | null;
  and?: Array<ModelWxReportFilterInput | null> | null;
  or?: Array<ModelWxReportFilterInput | null> | null;
  not?: ModelWxReportFilterInput | null;
};

export type ModelPrivateLogbookFilterInput = {
  id?: ModelIDInput | null;
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  fltDate?: ModelStringInput | null;
  code?: ModelStringInput | null;
  nflt?: ModelStringInput | null;
  dep?: ModelStringInput | null;
  arr?: ModelStringInput | null;
  dhd?: ModelBooleanInput | null;
  augmented?: ModelBooleanInput | null;
  training?: ModelBooleanInput | null;
  dBlockTime?: ModelFloatInput | null;
  hBlockTime?: ModelStringInput | null;
  fCrew?: ModelIDInput | null;
  cCrew?: ModelIDInput | null;
  and?: Array<ModelPrivateLogbookFilterInput | null> | null;
  or?: Array<ModelPrivateLogbookFilterInput | null> | null;
  not?: ModelPrivateLogbookFilterInput | null;
};

export type ModelPrivateLogbookConnection = {
  __typename: "ModelPrivateLogbookConnection";
  items?: Array<PrivateLogbook | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPilotFilterInput = {
  id?: ModelIDInput | null;
  createAt?: ModelStringInput | null;
  createAtTS?: ModelIntInput | null;
  fullName?: ModelStringInput | null;
  name?: ModelStringInput | null;
  middleName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  and?: Array<ModelPilotFilterInput | null> | null;
  or?: Array<ModelPilotFilterInput | null> | null;
  not?: ModelPilotFilterInput | null;
};

export type ModelPilotConnection = {
  __typename: "ModelPilotConnection";
  items?: Array<Pilot | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelNotamQ23FilterInput = {
  id?: ModelIDInput | null;
  category?: ModelStringInput | null;
  code?: ModelStringInput | null;
  description?: ModelStringInput | null;
  level?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  and?: Array<ModelNotamQ23FilterInput | null> | null;
  or?: Array<ModelNotamQ23FilterInput | null> | null;
  not?: ModelNotamQ23FilterInput | null;
};

export type ModelNotamQ23Connection = {
  __typename: "ModelNotamQ23Connection";
  items?: Array<NotamQ23 | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelNotamQ45FilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelNotamQ45FilterInput | null> | null;
  or?: Array<ModelNotamQ45FilterInput | null> | null;
  not?: ModelNotamQ45FilterInput | null;
};

export type ModelNotamQ45Connection = {
  __typename: "ModelNotamQ45Connection";
  items?: Array<NotamQ45 | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelIcaoAbbreviationsCodesFilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelIcaoAbbreviationsCodesFilterInput | null> | null;
  or?: Array<ModelIcaoAbbreviationsCodesFilterInput | null> | null;
  not?: ModelIcaoAbbreviationsCodesFilterInput | null;
};

export type ModelIcaoAbbreviationsCodesConnection = {
  __typename: "ModelIcaoAbbreviationsCodesConnection";
  items?: Array<IcaoAbbreviationsCodes | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  nickname?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  idPublic?: ModelStringInput | null;
  idPrivate?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateCountryMutation = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCountryMutation = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCountryMutation = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateAirportMutation = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAirportMutation = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAirportMutation = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateWxReportHistoryMutation = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWxReportHistoryMutation = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWxReportHistoryMutation = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateWxReportMutation = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWxReportMutation = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWxReportMutation = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreatePrivateLogbookMutation = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePrivateLogbookMutation = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePrivateLogbookMutation = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreatePilotMutation = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePilotMutation = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePilotMutation = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateNotamQ23Mutation = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNotamQ23Mutation = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNotamQ23Mutation = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateNotamQ45Mutation = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNotamQ45Mutation = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNotamQ45Mutation = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateIcaoAbbreviationsCodesMutation = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateIcaoAbbreviationsCodesMutation = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteIcaoAbbreviationsCodesMutation = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncCountriesQuery = {
  __typename: "ModelCountryConnection";
  items?: Array<{
    __typename: "Country";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    name?: string | null;
    iso31661a2?: string | null;
    iso31661a3?: string | null;
    iso31661n?: number | null;
    coordinates?: Array<number | null> | null;
    continent?: string | null;
    flagIcon?: string | null;
    flagSvg?: string | null;
    domain?: Array<string | null> | null;
    tzName?: string | null;
    geoJson?: string | null;
    landlocked?: boolean | null;
    borders?: Array<string | null> | null;
    area?: number | null;
    demonyms?: string | null;
    dialCode?: Array<string | null> | null;
    wikiLink?: string | null;
    icaoArpt?: string | null;
    icaoTail?: string | null;
    e164?: string | null;
    ioc?: string | null;
    e212?: string | null;
    natoa3?: string | null;
    natoa2?: string | null;
    locMarc?: string | null;
    ituMid?: string | null;
    itu3a?: string | null;
    ituPreffix?: string | null;
    fips?: string | null;
    plate?: string | null;
    gs1?: string | null;
    undp?: string | null;
    wmo?: string | null;
    countryWxRH?: {
      __typename: "ModelWxReportHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryWxR?: {
      __typename: "ModelWxReportConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryArpt?: {
      __typename: "ModelAirportConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCountryQuery = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListCountrysQuery = {
  __typename: "ModelCountryConnection";
  items?: Array<{
    __typename: "Country";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    name?: string | null;
    iso31661a2?: string | null;
    iso31661a3?: string | null;
    iso31661n?: number | null;
    coordinates?: Array<number | null> | null;
    continent?: string | null;
    flagIcon?: string | null;
    flagSvg?: string | null;
    domain?: Array<string | null> | null;
    tzName?: string | null;
    geoJson?: string | null;
    landlocked?: boolean | null;
    borders?: Array<string | null> | null;
    area?: number | null;
    demonyms?: string | null;
    dialCode?: Array<string | null> | null;
    wikiLink?: string | null;
    icaoArpt?: string | null;
    icaoTail?: string | null;
    e164?: string | null;
    ioc?: string | null;
    e212?: string | null;
    natoa3?: string | null;
    natoa2?: string | null;
    locMarc?: string | null;
    ituMid?: string | null;
    itu3a?: string | null;
    ituPreffix?: string | null;
    fips?: string | null;
    plate?: string | null;
    gs1?: string | null;
    undp?: string | null;
    wmo?: string | null;
    countryWxRH?: {
      __typename: "ModelWxReportHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryWxR?: {
      __typename: "ModelWxReportConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryArpt?: {
      __typename: "ModelAirportConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAirportsQuery = {
  __typename: "ModelAirportConnection";
  items?: Array<{
    __typename: "Airport";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    iso31661a2?: string | null;
    icao?: string | null;
    iata?: string | null;
    faa?: string | null;
    name?: string | null;
    city?: string | null;
    state?: string | null;
    elevation?: number | null;
    tz_name?: string | null;
    coordinates?: Array<number | null> | null;
    arptWxRH?: {
      __typename: "ModelWxReportHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    arptWxR?: {
      __typename: "ModelWxReportConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAirportQuery = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListAirportsQuery = {
  __typename: "ModelAirportConnection";
  items?: Array<{
    __typename: "Airport";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    iso31661a2?: string | null;
    icao?: string | null;
    iata?: string | null;
    faa?: string | null;
    name?: string | null;
    city?: string | null;
    state?: string | null;
    elevation?: number | null;
    tz_name?: string | null;
    coordinates?: Array<number | null> | null;
    arptWxRH?: {
      __typename: "ModelWxReportHistoryConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    arptWxR?: {
      __typename: "ModelWxReportConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    countryID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncWxReportHistoriesQuery = {
  __typename: "ModelWxReportHistoryConnection";
  items?: Array<{
    __typename: "WxReportHistory";
    id: string;
    createAt: string;
    createAtTS?: number | null;
    isoDate?: string | null;
    tsDate?: number | null;
    countryIso31661a2?: string | null;
    icao?: string | null;
    faa?: string | null;
    reportType?: ReportType | null;
    raw?: string | null;
    countryID: string;
    airportID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetWxReportHistoryQuery = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListWxReportHistorysQuery = {
  __typename: "ModelWxReportHistoryConnection";
  items?: Array<{
    __typename: "WxReportHistory";
    id: string;
    createAt: string;
    createAtTS?: number | null;
    isoDate?: string | null;
    tsDate?: number | null;
    countryIso31661a2?: string | null;
    icao?: string | null;
    faa?: string | null;
    reportType?: ReportType | null;
    raw?: string | null;
    countryID: string;
    airportID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncWxReportsQuery = {
  __typename: "ModelWxReportConnection";
  items?: Array<{
    __typename: "WxReport";
    id: string;
    createAt: string;
    createAtTS?: number | null;
    isoDate: string;
    tsDate?: number | null;
    ttl?: number | null;
    countryIso31661a2?: string | null;
    arptCode?: ArptCode | null;
    reportType?: ReportType | null;
    raw?: string | null;
    countryID: string;
    airportID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetWxReportQuery = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListWxReportsQuery = {
  __typename: "ModelWxReportConnection";
  items?: Array<{
    __typename: "WxReport";
    id: string;
    createAt: string;
    createAtTS?: number | null;
    isoDate: string;
    tsDate?: number | null;
    ttl?: number | null;
    countryIso31661a2?: string | null;
    arptCode?: ArptCode | null;
    reportType?: ReportType | null;
    raw?: string | null;
    countryID: string;
    airportID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncPrivateLogbooksQuery = {
  __typename: "ModelPrivateLogbookConnection";
  items?: Array<{
    __typename: "PrivateLogbook";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    fltDate?: string | null;
    code?: string | null;
    nflt?: string | null;
    dep?: string | null;
    arr?: string | null;
    dhd?: boolean | null;
    augmented?: boolean | null;
    training?: boolean | null;
    dBlockTime?: number | null;
    hBlockTime?: string | null;
    fCrew?: Array<string | null> | null;
    cCrew?: Array<string | null> | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetPrivateLogbookQuery = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPrivateLogbooksQuery = {
  __typename: "ModelPrivateLogbookConnection";
  items?: Array<{
    __typename: "PrivateLogbook";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    fltDate?: string | null;
    code?: string | null;
    nflt?: string | null;
    dep?: string | null;
    arr?: string | null;
    dhd?: boolean | null;
    augmented?: boolean | null;
    training?: boolean | null;
    dBlockTime?: number | null;
    hBlockTime?: string | null;
    fCrew?: Array<string | null> | null;
    cCrew?: Array<string | null> | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncPilotsQuery = {
  __typename: "ModelPilotConnection";
  items?: Array<{
    __typename: "Pilot";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    fullName?: string | null;
    name?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    dob?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetPilotQuery = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPilotsQuery = {
  __typename: "ModelPilotConnection";
  items?: Array<{
    __typename: "Pilot";
    id: string;
    createAt?: string | null;
    createAtTS?: number | null;
    fullName?: string | null;
    name?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    dob?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncNotamQ23sQuery = {
  __typename: "ModelNotamQ23Connection";
  items?: Array<{
    __typename: "NotamQ23";
    id: string;
    category?: string | null;
    code?: string | null;
    description?: string | null;
    level?: string | null;
    icon?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetNotamQ23Query = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListNotamQ23sQuery = {
  __typename: "ModelNotamQ23Connection";
  items?: Array<{
    __typename: "NotamQ23";
    id: string;
    category?: string | null;
    code?: string | null;
    description?: string | null;
    level?: string | null;
    icon?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncNotamQ45sQuery = {
  __typename: "ModelNotamQ45Connection";
  items?: Array<{
    __typename: "NotamQ45";
    id: string;
    code?: string | null;
    description?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetNotamQ45Query = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListNotamQ45sQuery = {
  __typename: "ModelNotamQ45Connection";
  items?: Array<{
    __typename: "NotamQ45";
    id: string;
    code?: string | null;
    description?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncIcaoAbbreviationsCodesQuery = {
  __typename: "ModelIcaoAbbreviationsCodesConnection";
  items?: Array<{
    __typename: "IcaoAbbreviationsCodes";
    id: string;
    code?: string | null;
    description?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetIcaoAbbreviationsCodesQuery = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListIcaoAbbreviationsCodessQuery = {
  __typename: "ModelIcaoAbbreviationsCodesConnection";
  items?: Array<{
    __typename: "IcaoAbbreviationsCodes";
    id: string;
    code?: string | null;
    description?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    nickname?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    idPublic?: string | null;
    idPrivate?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    nickname?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    idPublic?: string | null;
    idPrivate?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateCountrySubscription = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCountrySubscription = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCountrySubscription = {
  __typename: "Country";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  name?: string | null;
  iso31661a2?: string | null;
  iso31661a3?: string | null;
  iso31661n?: number | null;
  coordinates?: Array<number | null> | null;
  continent?: string | null;
  flagIcon?: string | null;
  flagSvg?: string | null;
  domain?: Array<string | null> | null;
  tzName?: string | null;
  geoJson?: string | null;
  landlocked?: boolean | null;
  borders?: Array<string | null> | null;
  area?: number | null;
  demonyms?: string | null;
  dialCode?: Array<string | null> | null;
  wikiLink?: string | null;
  icaoArpt?: string | null;
  icaoTail?: string | null;
  e164?: string | null;
  ioc?: string | null;
  e212?: string | null;
  natoa3?: string | null;
  natoa2?: string | null;
  locMarc?: string | null;
  ituMid?: string | null;
  itu3a?: string | null;
  ituPreffix?: string | null;
  fips?: string | null;
  plate?: string | null;
  gs1?: string | null;
  undp?: string | null;
  wmo?: string | null;
  countryWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryArpt?: {
    __typename: "ModelAirportConnection";
    items?: Array<{
      __typename: "Airport";
      id: string;
      createAt?: string | null;
      createAtTS?: number | null;
      iso31661a2?: string | null;
      icao?: string | null;
      iata?: string | null;
      faa?: string | null;
      name?: string | null;
      city?: string | null;
      state?: string | null;
      elevation?: number | null;
      tz_name?: string | null;
      coordinates?: Array<number | null> | null;
      countryID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAirportSubscription = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAirportSubscription = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAirportSubscription = {
  __typename: "Airport";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  iso31661a2?: string | null;
  icao?: string | null;
  iata?: string | null;
  faa?: string | null;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  elevation?: number | null;
  tz_name?: string | null;
  coordinates?: Array<number | null> | null;
  arptWxRH?: {
    __typename: "ModelWxReportHistoryConnection";
    items?: Array<{
      __typename: "WxReportHistory";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate?: string | null;
      tsDate?: number | null;
      countryIso31661a2?: string | null;
      icao?: string | null;
      faa?: string | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  arptWxR?: {
    __typename: "ModelWxReportConnection";
    items?: Array<{
      __typename: "WxReport";
      id: string;
      createAt: string;
      createAtTS?: number | null;
      isoDate: string;
      tsDate?: number | null;
      ttl?: number | null;
      countryIso31661a2?: string | null;
      arptCode?: ArptCode | null;
      reportType?: ReportType | null;
      raw?: string | null;
      countryID: string;
      airportID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  countryID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWxReportHistorySubscription = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWxReportHistorySubscription = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWxReportHistorySubscription = {
  __typename: "WxReportHistory";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate?: string | null;
  tsDate?: number | null;
  countryIso31661a2?: string | null;
  icao?: string | null;
  faa?: string | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWxReportSubscription = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWxReportSubscription = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWxReportSubscription = {
  __typename: "WxReport";
  id: string;
  createAt: string;
  createAtTS?: number | null;
  isoDate: string;
  tsDate?: number | null;
  ttl?: number | null;
  countryIso31661a2?: string | null;
  arptCode?: ArptCode | null;
  reportType?: ReportType | null;
  raw?: string | null;
  countryID: string;
  airportID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePrivateLogbookSubscription = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePrivateLogbookSubscription = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePrivateLogbookSubscription = {
  __typename: "PrivateLogbook";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fltDate?: string | null;
  code?: string | null;
  nflt?: string | null;
  dep?: string | null;
  arr?: string | null;
  dhd?: boolean | null;
  augmented?: boolean | null;
  training?: boolean | null;
  dBlockTime?: number | null;
  hBlockTime?: string | null;
  fCrew?: Array<string | null> | null;
  cCrew?: Array<string | null> | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePilotSubscription = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePilotSubscription = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePilotSubscription = {
  __typename: "Pilot";
  id: string;
  createAt?: string | null;
  createAtTS?: number | null;
  fullName?: string | null;
  name?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateNotamQ23Subscription = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNotamQ23Subscription = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNotamQ23Subscription = {
  __typename: "NotamQ23";
  id: string;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  level?: string | null;
  icon?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateNotamQ45Subscription = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNotamQ45Subscription = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNotamQ45Subscription = {
  __typename: "NotamQ45";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateIcaoAbbreviationsCodesSubscription = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateIcaoAbbreviationsCodesSubscription = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteIcaoAbbreviationsCodesSubscription = {
  __typename: "IcaoAbbreviationsCodes";
  id: string;
  code?: string | null;
  description?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  nickname?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  idPublic?: string | null;
  idPrivate?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCountry(
    input: CreateCountryInput,
    condition?: ModelCountryConditionInput
  ): Promise<CreateCountryMutation> {
    const statement = `mutation CreateCountry($input: CreateCountryInput!, $condition: ModelCountryConditionInput) {
        createCountry(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCountryMutation>response.data.createCountry;
  }
  async UpdateCountry(
    input: UpdateCountryInput,
    condition?: ModelCountryConditionInput
  ): Promise<UpdateCountryMutation> {
    const statement = `mutation UpdateCountry($input: UpdateCountryInput!, $condition: ModelCountryConditionInput) {
        updateCountry(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCountryMutation>response.data.updateCountry;
  }
  async DeleteCountry(
    input: DeleteCountryInput,
    condition?: ModelCountryConditionInput
  ): Promise<DeleteCountryMutation> {
    const statement = `mutation DeleteCountry($input: DeleteCountryInput!, $condition: ModelCountryConditionInput) {
        deleteCountry(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCountryMutation>response.data.deleteCountry;
  }
  async CreateAirport(
    input: CreateAirportInput,
    condition?: ModelAirportConditionInput
  ): Promise<CreateAirportMutation> {
    const statement = `mutation CreateAirport($input: CreateAirportInput!, $condition: ModelAirportConditionInput) {
        createAirport(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAirportMutation>response.data.createAirport;
  }
  async UpdateAirport(
    input: UpdateAirportInput,
    condition?: ModelAirportConditionInput
  ): Promise<UpdateAirportMutation> {
    const statement = `mutation UpdateAirport($input: UpdateAirportInput!, $condition: ModelAirportConditionInput) {
        updateAirport(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAirportMutation>response.data.updateAirport;
  }
  async DeleteAirport(
    input: DeleteAirportInput,
    condition?: ModelAirportConditionInput
  ): Promise<DeleteAirportMutation> {
    const statement = `mutation DeleteAirport($input: DeleteAirportInput!, $condition: ModelAirportConditionInput) {
        deleteAirport(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAirportMutation>response.data.deleteAirport;
  }
  async CreateWxReportHistory(
    input: CreateWxReportHistoryInput,
    condition?: ModelWxReportHistoryConditionInput
  ): Promise<CreateWxReportHistoryMutation> {
    const statement = `mutation CreateWxReportHistory($input: CreateWxReportHistoryInput!, $condition: ModelWxReportHistoryConditionInput) {
        createWxReportHistory(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWxReportHistoryMutation>response.data.createWxReportHistory;
  }
  async UpdateWxReportHistory(
    input: UpdateWxReportHistoryInput,
    condition?: ModelWxReportHistoryConditionInput
  ): Promise<UpdateWxReportHistoryMutation> {
    const statement = `mutation UpdateWxReportHistory($input: UpdateWxReportHistoryInput!, $condition: ModelWxReportHistoryConditionInput) {
        updateWxReportHistory(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWxReportHistoryMutation>response.data.updateWxReportHistory;
  }
  async DeleteWxReportHistory(
    input: DeleteWxReportHistoryInput,
    condition?: ModelWxReportHistoryConditionInput
  ): Promise<DeleteWxReportHistoryMutation> {
    const statement = `mutation DeleteWxReportHistory($input: DeleteWxReportHistoryInput!, $condition: ModelWxReportHistoryConditionInput) {
        deleteWxReportHistory(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWxReportHistoryMutation>response.data.deleteWxReportHistory;
  }
  async CreateWxReport(
    input: CreateWxReportInput,
    condition?: ModelWxReportConditionInput
  ): Promise<CreateWxReportMutation> {
    const statement = `mutation CreateWxReport($input: CreateWxReportInput!, $condition: ModelWxReportConditionInput) {
        createWxReport(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWxReportMutation>response.data.createWxReport;
  }
  async UpdateWxReport(
    input: UpdateWxReportInput,
    condition?: ModelWxReportConditionInput
  ): Promise<UpdateWxReportMutation> {
    const statement = `mutation UpdateWxReport($input: UpdateWxReportInput!, $condition: ModelWxReportConditionInput) {
        updateWxReport(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWxReportMutation>response.data.updateWxReport;
  }
  async DeleteWxReport(
    input: DeleteWxReportInput,
    condition?: ModelWxReportConditionInput
  ): Promise<DeleteWxReportMutation> {
    const statement = `mutation DeleteWxReport($input: DeleteWxReportInput!, $condition: ModelWxReportConditionInput) {
        deleteWxReport(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWxReportMutation>response.data.deleteWxReport;
  }
  async CreatePrivateLogbook(
    input: CreatePrivateLogbookInput,
    condition?: ModelPrivateLogbookConditionInput
  ): Promise<CreatePrivateLogbookMutation> {
    const statement = `mutation CreatePrivateLogbook($input: CreatePrivateLogbookInput!, $condition: ModelPrivateLogbookConditionInput) {
        createPrivateLogbook(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePrivateLogbookMutation>response.data.createPrivateLogbook;
  }
  async UpdatePrivateLogbook(
    input: UpdatePrivateLogbookInput,
    condition?: ModelPrivateLogbookConditionInput
  ): Promise<UpdatePrivateLogbookMutation> {
    const statement = `mutation UpdatePrivateLogbook($input: UpdatePrivateLogbookInput!, $condition: ModelPrivateLogbookConditionInput) {
        updatePrivateLogbook(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePrivateLogbookMutation>response.data.updatePrivateLogbook;
  }
  async DeletePrivateLogbook(
    input: DeletePrivateLogbookInput,
    condition?: ModelPrivateLogbookConditionInput
  ): Promise<DeletePrivateLogbookMutation> {
    const statement = `mutation DeletePrivateLogbook($input: DeletePrivateLogbookInput!, $condition: ModelPrivateLogbookConditionInput) {
        deletePrivateLogbook(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePrivateLogbookMutation>response.data.deletePrivateLogbook;
  }
  async CreatePilot(
    input: CreatePilotInput,
    condition?: ModelPilotConditionInput
  ): Promise<CreatePilotMutation> {
    const statement = `mutation CreatePilot($input: CreatePilotInput!, $condition: ModelPilotConditionInput) {
        createPilot(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePilotMutation>response.data.createPilot;
  }
  async UpdatePilot(
    input: UpdatePilotInput,
    condition?: ModelPilotConditionInput
  ): Promise<UpdatePilotMutation> {
    const statement = `mutation UpdatePilot($input: UpdatePilotInput!, $condition: ModelPilotConditionInput) {
        updatePilot(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePilotMutation>response.data.updatePilot;
  }
  async DeletePilot(
    input: DeletePilotInput,
    condition?: ModelPilotConditionInput
  ): Promise<DeletePilotMutation> {
    const statement = `mutation DeletePilot($input: DeletePilotInput!, $condition: ModelPilotConditionInput) {
        deletePilot(input: $input, condition: $condition) {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePilotMutation>response.data.deletePilot;
  }
  async CreateNotamQ23(
    input: CreateNotamQ23Input,
    condition?: ModelNotamQ23ConditionInput
  ): Promise<CreateNotamQ23Mutation> {
    const statement = `mutation CreateNotamQ23($input: CreateNotamQ23Input!, $condition: ModelNotamQ23ConditionInput) {
        createNotamQ23(input: $input, condition: $condition) {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNotamQ23Mutation>response.data.createNotamQ23;
  }
  async UpdateNotamQ23(
    input: UpdateNotamQ23Input,
    condition?: ModelNotamQ23ConditionInput
  ): Promise<UpdateNotamQ23Mutation> {
    const statement = `mutation UpdateNotamQ23($input: UpdateNotamQ23Input!, $condition: ModelNotamQ23ConditionInput) {
        updateNotamQ23(input: $input, condition: $condition) {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNotamQ23Mutation>response.data.updateNotamQ23;
  }
  async DeleteNotamQ23(
    input: DeleteNotamQ23Input,
    condition?: ModelNotamQ23ConditionInput
  ): Promise<DeleteNotamQ23Mutation> {
    const statement = `mutation DeleteNotamQ23($input: DeleteNotamQ23Input!, $condition: ModelNotamQ23ConditionInput) {
        deleteNotamQ23(input: $input, condition: $condition) {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNotamQ23Mutation>response.data.deleteNotamQ23;
  }
  async CreateNotamQ45(
    input: CreateNotamQ45Input,
    condition?: ModelNotamQ45ConditionInput
  ): Promise<CreateNotamQ45Mutation> {
    const statement = `mutation CreateNotamQ45($input: CreateNotamQ45Input!, $condition: ModelNotamQ45ConditionInput) {
        createNotamQ45(input: $input, condition: $condition) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNotamQ45Mutation>response.data.createNotamQ45;
  }
  async UpdateNotamQ45(
    input: UpdateNotamQ45Input,
    condition?: ModelNotamQ45ConditionInput
  ): Promise<UpdateNotamQ45Mutation> {
    const statement = `mutation UpdateNotamQ45($input: UpdateNotamQ45Input!, $condition: ModelNotamQ45ConditionInput) {
        updateNotamQ45(input: $input, condition: $condition) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNotamQ45Mutation>response.data.updateNotamQ45;
  }
  async DeleteNotamQ45(
    input: DeleteNotamQ45Input,
    condition?: ModelNotamQ45ConditionInput
  ): Promise<DeleteNotamQ45Mutation> {
    const statement = `mutation DeleteNotamQ45($input: DeleteNotamQ45Input!, $condition: ModelNotamQ45ConditionInput) {
        deleteNotamQ45(input: $input, condition: $condition) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNotamQ45Mutation>response.data.deleteNotamQ45;
  }
  async CreateIcaoAbbreviationsCodes(
    input: CreateIcaoAbbreviationsCodesInput,
    condition?: ModelIcaoAbbreviationsCodesConditionInput
  ): Promise<CreateIcaoAbbreviationsCodesMutation> {
    const statement = `mutation CreateIcaoAbbreviationsCodes($input: CreateIcaoAbbreviationsCodesInput!, $condition: ModelIcaoAbbreviationsCodesConditionInput) {
        createIcaoAbbreviationsCodes(input: $input, condition: $condition) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateIcaoAbbreviationsCodesMutation>(
      response.data.createIcaoAbbreviationsCodes
    );
  }
  async UpdateIcaoAbbreviationsCodes(
    input: UpdateIcaoAbbreviationsCodesInput,
    condition?: ModelIcaoAbbreviationsCodesConditionInput
  ): Promise<UpdateIcaoAbbreviationsCodesMutation> {
    const statement = `mutation UpdateIcaoAbbreviationsCodes($input: UpdateIcaoAbbreviationsCodesInput!, $condition: ModelIcaoAbbreviationsCodesConditionInput) {
        updateIcaoAbbreviationsCodes(input: $input, condition: $condition) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateIcaoAbbreviationsCodesMutation>(
      response.data.updateIcaoAbbreviationsCodes
    );
  }
  async DeleteIcaoAbbreviationsCodes(
    input: DeleteIcaoAbbreviationsCodesInput,
    condition?: ModelIcaoAbbreviationsCodesConditionInput
  ): Promise<DeleteIcaoAbbreviationsCodesMutation> {
    const statement = `mutation DeleteIcaoAbbreviationsCodes($input: DeleteIcaoAbbreviationsCodesInput!, $condition: ModelIcaoAbbreviationsCodesConditionInput) {
        deleteIcaoAbbreviationsCodes(input: $input, condition: $condition) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteIcaoAbbreviationsCodesMutation>(
      response.data.deleteIcaoAbbreviationsCodes
    );
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async SyncCountries(
    filter?: ModelCountryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCountriesQuery> {
    const statement = `query SyncCountries($filter: ModelCountryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCountries(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            name
            iso31661a2
            iso31661a3
            iso31661n
            coordinates
            continent
            flagIcon
            flagSvg
            domain
            tzName
            geoJson
            landlocked
            borders
            area
            demonyms
            dialCode
            wikiLink
            icaoArpt
            icaoTail
            e164
            ioc
            e212
            natoa3
            natoa2
            locMarc
            ituMid
            itu3a
            ituPreffix
            fips
            plate
            gs1
            undp
            wmo
            countryWxRH {
              __typename
              nextToken
              startedAt
            }
            countryWxR {
              __typename
              nextToken
              startedAt
            }
            countryArpt {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCountriesQuery>response.data.syncCountries;
  }
  async GetCountry(id: string): Promise<GetCountryQuery> {
    const statement = `query GetCountry($id: ID!) {
        getCountry(id: $id) {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCountryQuery>response.data.getCountry;
  }
  async ListCountrys(
    filter?: ModelCountryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCountrysQuery> {
    const statement = `query ListCountrys($filter: ModelCountryFilterInput, $limit: Int, $nextToken: String) {
        listCountrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            name
            iso31661a2
            iso31661a3
            iso31661n
            coordinates
            continent
            flagIcon
            flagSvg
            domain
            tzName
            geoJson
            landlocked
            borders
            area
            demonyms
            dialCode
            wikiLink
            icaoArpt
            icaoTail
            e164
            ioc
            e212
            natoa3
            natoa2
            locMarc
            ituMid
            itu3a
            ituPreffix
            fips
            plate
            gs1
            undp
            wmo
            countryWxRH {
              __typename
              nextToken
              startedAt
            }
            countryWxR {
              __typename
              nextToken
              startedAt
            }
            countryArpt {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCountrysQuery>response.data.listCountrys;
  }
  async SyncAirports(
    filter?: ModelAirportFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAirportsQuery> {
    const statement = `query SyncAirports($filter: ModelAirportFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAirports(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            iso31661a2
            icao
            iata
            faa
            name
            city
            state
            elevation
            tz_name
            coordinates
            arptWxRH {
              __typename
              nextToken
              startedAt
            }
            arptWxR {
              __typename
              nextToken
              startedAt
            }
            countryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAirportsQuery>response.data.syncAirports;
  }
  async GetAirport(id: string): Promise<GetAirportQuery> {
    const statement = `query GetAirport($id: ID!) {
        getAirport(id: $id) {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAirportQuery>response.data.getAirport;
  }
  async ListAirports(
    filter?: ModelAirportFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAirportsQuery> {
    const statement = `query ListAirports($filter: ModelAirportFilterInput, $limit: Int, $nextToken: String) {
        listAirports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            iso31661a2
            icao
            iata
            faa
            name
            city
            state
            elevation
            tz_name
            coordinates
            arptWxRH {
              __typename
              nextToken
              startedAt
            }
            arptWxR {
              __typename
              nextToken
              startedAt
            }
            countryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAirportsQuery>response.data.listAirports;
  }
  async SyncWxReportHistories(
    filter?: ModelWxReportHistoryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncWxReportHistoriesQuery> {
    const statement = `query SyncWxReportHistories($filter: ModelWxReportHistoryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncWxReportHistories(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            isoDate
            tsDate
            countryIso31661a2
            icao
            faa
            reportType
            raw
            countryID
            airportID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncWxReportHistoriesQuery>response.data.syncWxReportHistories;
  }
  async GetWxReportHistory(id: string): Promise<GetWxReportHistoryQuery> {
    const statement = `query GetWxReportHistory($id: ID!) {
        getWxReportHistory(id: $id) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWxReportHistoryQuery>response.data.getWxReportHistory;
  }
  async ListWxReportHistorys(
    filter?: ModelWxReportHistoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWxReportHistorysQuery> {
    const statement = `query ListWxReportHistorys($filter: ModelWxReportHistoryFilterInput, $limit: Int, $nextToken: String) {
        listWxReportHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            isoDate
            tsDate
            countryIso31661a2
            icao
            faa
            reportType
            raw
            countryID
            airportID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWxReportHistorysQuery>response.data.listWxReportHistorys;
  }
  async SyncWxReports(
    filter?: ModelWxReportFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncWxReportsQuery> {
    const statement = `query SyncWxReports($filter: ModelWxReportFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncWxReports(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            isoDate
            tsDate
            ttl
            countryIso31661a2
            arptCode
            reportType
            raw
            countryID
            airportID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncWxReportsQuery>response.data.syncWxReports;
  }
  async GetWxReport(id: string): Promise<GetWxReportQuery> {
    const statement = `query GetWxReport($id: ID!) {
        getWxReport(id: $id) {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWxReportQuery>response.data.getWxReport;
  }
  async ListWxReports(
    filter?: ModelWxReportFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWxReportsQuery> {
    const statement = `query ListWxReports($filter: ModelWxReportFilterInput, $limit: Int, $nextToken: String) {
        listWxReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            isoDate
            tsDate
            ttl
            countryIso31661a2
            arptCode
            reportType
            raw
            countryID
            airportID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWxReportsQuery>response.data.listWxReports;
  }
  async SyncPrivateLogbooks(
    filter?: ModelPrivateLogbookFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPrivateLogbooksQuery> {
    const statement = `query SyncPrivateLogbooks($filter: ModelPrivateLogbookFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPrivateLogbooks(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            fltDate
            code
            nflt
            dep
            arr
            dhd
            augmented
            training
            dBlockTime
            hBlockTime
            fCrew
            cCrew
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPrivateLogbooksQuery>response.data.syncPrivateLogbooks;
  }
  async GetPrivateLogbook(id: string): Promise<GetPrivateLogbookQuery> {
    const statement = `query GetPrivateLogbook($id: ID!) {
        getPrivateLogbook(id: $id) {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPrivateLogbookQuery>response.data.getPrivateLogbook;
  }
  async ListPrivateLogbooks(
    filter?: ModelPrivateLogbookFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPrivateLogbooksQuery> {
    const statement = `query ListPrivateLogbooks($filter: ModelPrivateLogbookFilterInput, $limit: Int, $nextToken: String) {
        listPrivateLogbooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            fltDate
            code
            nflt
            dep
            arr
            dhd
            augmented
            training
            dBlockTime
            hBlockTime
            fCrew
            cCrew
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPrivateLogbooksQuery>response.data.listPrivateLogbooks;
  }
  async SyncPilots(
    filter?: ModelPilotFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPilotsQuery> {
    const statement = `query SyncPilots($filter: ModelPilotFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPilots(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            fullName
            name
            middleName
            lastName
            dob
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPilotsQuery>response.data.syncPilots;
  }
  async GetPilot(id: string): Promise<GetPilotQuery> {
    const statement = `query GetPilot($id: ID!) {
        getPilot(id: $id) {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPilotQuery>response.data.getPilot;
  }
  async ListPilots(
    filter?: ModelPilotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPilotsQuery> {
    const statement = `query ListPilots($filter: ModelPilotFilterInput, $limit: Int, $nextToken: String) {
        listPilots(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createAt
            createAtTS
            fullName
            name
            middleName
            lastName
            dob
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPilotsQuery>response.data.listPilots;
  }
  async SyncNotamQ23s(
    filter?: ModelNotamQ23FilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncNotamQ23sQuery> {
    const statement = `query SyncNotamQ23s($filter: ModelNotamQ23FilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncNotamQ23s(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            category
            code
            description
            level
            icon
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncNotamQ23sQuery>response.data.syncNotamQ23s;
  }
  async GetNotamQ23(id: string): Promise<GetNotamQ23Query> {
    const statement = `query GetNotamQ23($id: ID!) {
        getNotamQ23(id: $id) {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNotamQ23Query>response.data.getNotamQ23;
  }
  async ListNotamQ23s(
    filter?: ModelNotamQ23FilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotamQ23sQuery> {
    const statement = `query ListNotamQ23s($filter: ModelNotamQ23FilterInput, $limit: Int, $nextToken: String) {
        listNotamQ23s(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            category
            code
            description
            level
            icon
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotamQ23sQuery>response.data.listNotamQ23s;
  }
  async SyncNotamQ45s(
    filter?: ModelNotamQ45FilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncNotamQ45sQuery> {
    const statement = `query SyncNotamQ45s($filter: ModelNotamQ45FilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncNotamQ45s(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            code
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncNotamQ45sQuery>response.data.syncNotamQ45s;
  }
  async GetNotamQ45(id: string): Promise<GetNotamQ45Query> {
    const statement = `query GetNotamQ45($id: ID!) {
        getNotamQ45(id: $id) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNotamQ45Query>response.data.getNotamQ45;
  }
  async ListNotamQ45s(
    filter?: ModelNotamQ45FilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotamQ45sQuery> {
    const statement = `query ListNotamQ45s($filter: ModelNotamQ45FilterInput, $limit: Int, $nextToken: String) {
        listNotamQ45s(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            code
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotamQ45sQuery>response.data.listNotamQ45s;
  }
  async SyncIcaoAbbreviationsCodes(
    filter?: ModelIcaoAbbreviationsCodesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncIcaoAbbreviationsCodesQuery> {
    const statement = `query SyncIcaoAbbreviationsCodes($filter: ModelIcaoAbbreviationsCodesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncIcaoAbbreviationsCodes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            code
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncIcaoAbbreviationsCodesQuery>(
      response.data.syncIcaoAbbreviationsCodes
    );
  }
  async GetIcaoAbbreviationsCodes(
    id: string
  ): Promise<GetIcaoAbbreviationsCodesQuery> {
    const statement = `query GetIcaoAbbreviationsCodes($id: ID!) {
        getIcaoAbbreviationsCodes(id: $id) {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIcaoAbbreviationsCodesQuery>(
      response.data.getIcaoAbbreviationsCodes
    );
  }
  async ListIcaoAbbreviationsCodess(
    filter?: ModelIcaoAbbreviationsCodesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListIcaoAbbreviationsCodessQuery> {
    const statement = `query ListIcaoAbbreviationsCodess($filter: ModelIcaoAbbreviationsCodesFilterInput, $limit: Int, $nextToken: String) {
        listIcaoAbbreviationsCodess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            code
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListIcaoAbbreviationsCodessQuery>(
      response.data.listIcaoAbbreviationsCodess
    );
  }
  async SyncUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUsersQuery> {
    const statement = `query SyncUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            nickname
            firstName
            lastName
            idPublic
            idPrivate
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUsersQuery>response.data.syncUsers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nickname
            firstName
            lastName
            idPublic
            idPrivate
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateCountryListener: Observable<
    SubscriptionResponse<OnCreateCountrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCountry {
        onCreateCountry {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCountrySubscription>>;

  OnUpdateCountryListener: Observable<
    SubscriptionResponse<OnUpdateCountrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCountry {
        onUpdateCountry {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCountrySubscription>>;

  OnDeleteCountryListener: Observable<
    SubscriptionResponse<OnDeleteCountrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCountry {
        onDeleteCountry {
          __typename
          id
          createAt
          createAtTS
          name
          iso31661a2
          iso31661a3
          iso31661n
          coordinates
          continent
          flagIcon
          flagSvg
          domain
          tzName
          geoJson
          landlocked
          borders
          area
          demonyms
          dialCode
          wikiLink
          icaoArpt
          icaoTail
          e164
          ioc
          e212
          natoa3
          natoa2
          locMarc
          ituMid
          itu3a
          ituPreffix
          fips
          plate
          gs1
          undp
          wmo
          countryWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryArpt {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              iso31661a2
              icao
              iata
              faa
              name
              city
              state
              elevation
              tz_name
              coordinates
              countryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCountrySubscription>>;

  OnCreateAirportListener: Observable<
    SubscriptionResponse<OnCreateAirportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAirport {
        onCreateAirport {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAirportSubscription>>;

  OnUpdateAirportListener: Observable<
    SubscriptionResponse<OnUpdateAirportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAirport {
        onUpdateAirport {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAirportSubscription>>;

  OnDeleteAirportListener: Observable<
    SubscriptionResponse<OnDeleteAirportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAirport {
        onDeleteAirport {
          __typename
          id
          createAt
          createAtTS
          iso31661a2
          icao
          iata
          faa
          name
          city
          state
          elevation
          tz_name
          coordinates
          arptWxRH {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              countryIso31661a2
              icao
              faa
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          arptWxR {
            __typename
            items {
              __typename
              id
              createAt
              createAtTS
              isoDate
              tsDate
              ttl
              countryIso31661a2
              arptCode
              reportType
              raw
              countryID
              airportID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          countryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAirportSubscription>>;

  OnCreateWxReportHistoryListener: Observable<
    SubscriptionResponse<OnCreateWxReportHistorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWxReportHistory {
        onCreateWxReportHistory {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateWxReportHistorySubscription>>;

  OnUpdateWxReportHistoryListener: Observable<
    SubscriptionResponse<OnUpdateWxReportHistorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWxReportHistory {
        onUpdateWxReportHistory {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateWxReportHistorySubscription>>;

  OnDeleteWxReportHistoryListener: Observable<
    SubscriptionResponse<OnDeleteWxReportHistorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWxReportHistory {
        onDeleteWxReportHistory {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          countryIso31661a2
          icao
          faa
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteWxReportHistorySubscription>>;

  OnCreateWxReportListener: Observable<
    SubscriptionResponse<OnCreateWxReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWxReport {
        onCreateWxReport {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateWxReportSubscription>>;

  OnUpdateWxReportListener: Observable<
    SubscriptionResponse<OnUpdateWxReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWxReport {
        onUpdateWxReport {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateWxReportSubscription>>;

  OnDeleteWxReportListener: Observable<
    SubscriptionResponse<OnDeleteWxReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWxReport {
        onDeleteWxReport {
          __typename
          id
          createAt
          createAtTS
          isoDate
          tsDate
          ttl
          countryIso31661a2
          arptCode
          reportType
          raw
          countryID
          airportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteWxReportSubscription>>;

  OnCreatePrivateLogbookListener: Observable<
    SubscriptionResponse<OnCreatePrivateLogbookSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePrivateLogbook {
        onCreatePrivateLogbook {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePrivateLogbookSubscription>>;

  OnUpdatePrivateLogbookListener: Observable<
    SubscriptionResponse<OnUpdatePrivateLogbookSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePrivateLogbook {
        onUpdatePrivateLogbook {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePrivateLogbookSubscription>>;

  OnDeletePrivateLogbookListener: Observable<
    SubscriptionResponse<OnDeletePrivateLogbookSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePrivateLogbook {
        onDeletePrivateLogbook {
          __typename
          id
          createAt
          createAtTS
          fltDate
          code
          nflt
          dep
          arr
          dhd
          augmented
          training
          dBlockTime
          hBlockTime
          fCrew
          cCrew
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePrivateLogbookSubscription>>;

  OnCreatePilotListener: Observable<
    SubscriptionResponse<OnCreatePilotSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePilot {
        onCreatePilot {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePilotSubscription>>;

  OnUpdatePilotListener: Observable<
    SubscriptionResponse<OnUpdatePilotSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePilot {
        onUpdatePilot {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePilotSubscription>>;

  OnDeletePilotListener: Observable<
    SubscriptionResponse<OnDeletePilotSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePilot {
        onDeletePilot {
          __typename
          id
          createAt
          createAtTS
          fullName
          name
          middleName
          lastName
          dob
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePilotSubscription>>;

  OnCreateNotamQ23Listener: Observable<
    SubscriptionResponse<OnCreateNotamQ23Subscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNotamQ23 {
        onCreateNotamQ23 {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateNotamQ23Subscription>>;

  OnUpdateNotamQ23Listener: Observable<
    SubscriptionResponse<OnUpdateNotamQ23Subscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNotamQ23 {
        onUpdateNotamQ23 {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateNotamQ23Subscription>>;

  OnDeleteNotamQ23Listener: Observable<
    SubscriptionResponse<OnDeleteNotamQ23Subscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNotamQ23 {
        onDeleteNotamQ23 {
          __typename
          id
          category
          code
          description
          level
          icon
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteNotamQ23Subscription>>;

  OnCreateNotamQ45Listener: Observable<
    SubscriptionResponse<OnCreateNotamQ45Subscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNotamQ45 {
        onCreateNotamQ45 {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateNotamQ45Subscription>>;

  OnUpdateNotamQ45Listener: Observable<
    SubscriptionResponse<OnUpdateNotamQ45Subscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNotamQ45 {
        onUpdateNotamQ45 {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateNotamQ45Subscription>>;

  OnDeleteNotamQ45Listener: Observable<
    SubscriptionResponse<OnDeleteNotamQ45Subscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNotamQ45 {
        onDeleteNotamQ45 {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteNotamQ45Subscription>>;

  OnCreateIcaoAbbreviationsCodesListener: Observable<
    SubscriptionResponse<OnCreateIcaoAbbreviationsCodesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateIcaoAbbreviationsCodes {
        onCreateIcaoAbbreviationsCodes {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateIcaoAbbreviationsCodesSubscription>
  >;

  OnUpdateIcaoAbbreviationsCodesListener: Observable<
    SubscriptionResponse<OnUpdateIcaoAbbreviationsCodesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateIcaoAbbreviationsCodes {
        onUpdateIcaoAbbreviationsCodes {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateIcaoAbbreviationsCodesSubscription>
  >;

  OnDeleteIcaoAbbreviationsCodesListener: Observable<
    SubscriptionResponse<OnDeleteIcaoAbbreviationsCodesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteIcaoAbbreviationsCodes {
        onDeleteIcaoAbbreviationsCodes {
          __typename
          id
          code
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteIcaoAbbreviationsCodesSubscription>
  >;

  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          nickname
          firstName
          lastName
          idPublic
          idPrivate
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;
}
