// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ReportType = {
  "METAR": "METAR",
  "TAF": "TAF",
  "SIGMET": "SIGMET",
  "TC": "TC",
  "ICING": "ICING",
  "WINDS": "WINDS"
};

const ArptCode = {
  "ICAO": "ICAO",
  "IATA": "IATA",
  "FAA": "FAA"
};

const Layover = {
  "FALSE": "FALSE",
  "DOMESTIC": "DOMESTIC",
  "INTERNATIONAL": "INTERNATIONAL"
};

const { Country, WxReportHistory, WxReport, Airport, PrivateLogbook, Pilot, NotamQ23, NotamQ45, IcaoAbbreviationsCodes } = initSchema(schema);

export {
  Country,
  WxReportHistory,
  WxReport,
  Airport,
  PrivateLogbook,
  Pilot,
  NotamQ23,
  NotamQ45,
  IcaoAbbreviationsCodes,
  ReportType,
  ArptCode,
  Layover
};