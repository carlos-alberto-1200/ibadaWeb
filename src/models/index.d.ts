import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ReportType {
  METAR = "METAR",
  TAF = "TAF",
  SIGMET = "SIGMET",
  TC = "TC",
  ICING = "ICING",
  WINDS = "WINDS"
}

export enum ArptCode {
  ICAO = "ICAO",
  IATA = "IATA",
  FAA = "FAA"
}

export enum Layover {
  FALSE = "FALSE",
  DOMESTIC = "DOMESTIC",
  INTERNATIONAL = "INTERNATIONAL"
}



export declare class Country {
  readonly id: string;
  readonly createAt?: string;
  readonly createAtTS?: number;
  readonly name?: string;
  readonly iso31661a2?: string;
  readonly iso31661a3?: string;
  readonly iso31661n?: number;
  readonly coordinates?: (number | null)[];
  readonly continent?: string;
  readonly flagIcon?: string;
  readonly flagSvg?: string;
  readonly domain?: (string | null)[];
  readonly tzName?: string;
  readonly geoJson?: string;
  readonly landlocked?: boolean;
  readonly borders?: (string | null)[];
  readonly area?: number;
  readonly demonyms?: string;
  readonly dialCode?: (string | null)[];
  readonly wikiLink?: string;
  readonly icaoArpt?: string;
  readonly icaoTail?: string;
  readonly e164?: string;
  readonly ioc?: string;
  readonly e212?: string;
  readonly natoa3?: string;
  readonly natoa2?: string;
  readonly locMarc?: string;
  readonly ituMid?: string;
  readonly itu3a?: string;
  readonly ituPreffix?: string;
  readonly fips?: string;
  readonly plate?: string;
  readonly gs1?: string;
  readonly undp?: string;
  readonly wmo?: string;
  readonly countryWxRH?: (WxReportHistory | null)[];
  readonly countryWxR?: (WxReport | null)[];
  readonly countryArpt?: (Airport | null)[];
  constructor(init: ModelInit<Country>);
  static copyOf(source: Country, mutator: (draft: MutableModel<Country>) => MutableModel<Country> | void): Country;
}

export declare class WxReportHistory {
  readonly id: string;
  readonly createAt: string;
  readonly createAtTS?: number;
  readonly isoDate?: string;
  readonly tsDate?: number;
  readonly countryIso31661a2?: string;
  readonly icao?: string;
  readonly faa?: string;
  readonly reportType?: ReportType | keyof typeof ReportType;
  readonly raw?: string;
  readonly countryID: string;
  readonly airportID: string;
  constructor(init: ModelInit<WxReportHistory>);
  static copyOf(source: WxReportHistory, mutator: (draft: MutableModel<WxReportHistory>) => MutableModel<WxReportHistory> | void): WxReportHistory;
}

export declare class WxReport {
  readonly id: string;
  readonly createAt: string;
  readonly createAtTS?: number;
  readonly isoDate: string;
  readonly tsDate?: number;
  readonly ttl?: number;
  readonly countryIso31661a2?: string;
  readonly arptCode?: ArptCode | keyof typeof ArptCode;
  readonly reportType?: ReportType | keyof typeof ReportType;
  readonly raw?: string;
  readonly countryID: string;
  readonly airportID: string;
  constructor(init: ModelInit<WxReport>);
  static copyOf(source: WxReport, mutator: (draft: MutableModel<WxReport>) => MutableModel<WxReport> | void): WxReport;
}

export declare class Airport {
  readonly id: string;
  readonly createAt?: string;
  readonly createAtTS?: number;
  readonly iso31661a2?: string;
  readonly icao?: string;
  readonly iata?: string;
  readonly faa?: string;
  readonly name?: string;
  readonly city?: string;
  readonly state?: string;
  readonly elevation?: number;
  readonly tz_name?: string;
  readonly coordinates?: (number | null)[];
  readonly arptWxRH?: (WxReportHistory | null)[];
  readonly arptWxR?: (WxReport | null)[];
  readonly countryID: string;
  constructor(init: ModelInit<Airport>);
  static copyOf(source: Airport, mutator: (draft: MutableModel<Airport>) => MutableModel<Airport> | void): Airport;
}

export declare class PrivateLogbook {
  readonly id: string;
  readonly createAt?: string;
  readonly createAtTS?: number;
  readonly fltDate?: string;
  readonly code?: string;
  readonly nflt?: string;
  readonly dep?: string;
  readonly arr?: string;
  readonly dhd?: boolean;
  readonly augmented?: boolean;
  readonly training?: boolean;
  readonly dBlockTime?: number;
  readonly hBlockTime?: string;
  readonly fCrew?: (string | null)[];
  readonly cCrew?: (string | null)[];
  constructor(init: ModelInit<PrivateLogbook>);
  static copyOf(source: PrivateLogbook, mutator: (draft: MutableModel<PrivateLogbook>) => MutableModel<PrivateLogbook> | void): PrivateLogbook;
}

export declare class Pilot {
  readonly id: string;
  readonly createAt?: string;
  readonly createAtTS?: number;
  readonly fullName?: string;
  readonly name?: string;
  readonly middleName?: string;
  readonly lastName?: string;
  readonly dob?: string;
  constructor(init: ModelInit<Pilot>);
  static copyOf(source: Pilot, mutator: (draft: MutableModel<Pilot>) => MutableModel<Pilot> | void): Pilot;
}

export declare class NotamQ23 {
  readonly id: string;
  readonly category?: string;
  readonly code?: string;
  readonly description?: string;
  readonly level?: string;
  readonly icon?: string;
  constructor(init: ModelInit<NotamQ23>);
  static copyOf(source: NotamQ23, mutator: (draft: MutableModel<NotamQ23>) => MutableModel<NotamQ23> | void): NotamQ23;
}

export declare class NotamQ45 {
  readonly id: string;
  readonly code?: string;
  readonly description?: string;
  constructor(init: ModelInit<NotamQ45>);
  static copyOf(source: NotamQ45, mutator: (draft: MutableModel<NotamQ45>) => MutableModel<NotamQ45> | void): NotamQ45;
}

export declare class IcaoAbbreviationsCodes {
  readonly id: string;
  readonly code?: string;
  readonly description?: string;
  constructor(init: ModelInit<IcaoAbbreviationsCodes>);
  static copyOf(source: IcaoAbbreviationsCodes, mutator: (draft: MutableModel<IcaoAbbreviationsCodes>) => MutableModel<IcaoAbbreviationsCodes> | void): IcaoAbbreviationsCodes;
}