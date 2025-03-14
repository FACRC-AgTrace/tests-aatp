import { CredentialPayload } from '@vckit/core-types';
import { StorageServiceConfig } from '../types';
import { IConstructObjectParameters } from '../utils/helpers';

export interface IssueEvent {
  eventType: 'issue_event';
  credentialPayload: CredentialPayload;
  credentialSubject: any;
  restOfVC: any;
}

export interface IImportedData {
  [key: string]: { value: any; checked: boolean };
}

export enum MimeTypeEnum {
  textPlain = 'text/plain',
  textHtml = 'text/html',
  applicationJson = 'application/json',
}

export enum SupportedProviderTypesEnum {
  gs1 = 'gs1',
}

export interface IVerifyURLPayload {
  uri: string;
  key?: string;
  hash?: string;
}

export interface IVCKitContext {
  issuer: string;
  vckitAPIUrl: string;
  headers?: Record<string, string>;
}

export interface ICredential {
  context: string[];
  type: string[];
  renderTemplate?: IRenderer[];
}

export interface ILinkResolverContext {
  dlrIdentificationKeyType: string;
  dlrLinkTitle: string;
  dlrVerificationPage: string;
  dlrQualifierPath: '';
}

export interface IEntityIssue extends ICredential, ILinkResolverContext {
  dlrAIs?: IDLRAI;
  [key: string]: any; // TODO: define the specific properties
}

export interface IDLRAI {
  [key: string]: string;
}

export interface IConfigDLR {
  dlrAPIUrl: string;
  dlrAPIKey: string;
  namespace: string;
  linkRegisterPath?: string;
}

export interface IStorageContext {
  storageAPIUrl: string;
  bucket: string;
}
export interface IContext {
  vckit: IVCKitContext;
  dlr: IConfigDLR;
  storage: StorageServiceConfig;
  identifierKeyPath: string | any;
  localStorageParams?: any;
}

export interface IDppContext extends IContext {
  dpp: IEntityIssue;
}

export interface IRenderer {
  template: string;
  '@type': string;
}

export interface IInputItems {
  quantity: number;
  uom: string;
  productClass: string;
}

export interface ITransformationEventContext extends IContext {
  identifiers: string[];
  epcisTransformationEvent: IEntityIssue;
  transformationEventCredential: IConstructObjectParameters;
  dpp: IEntityIssue;
  dppCredentials: IConstructObjectParameters[];
  identifierKeyPath: string;
}

export interface ITraceabilityEvent {
  data: any;
}

export interface IDigitalIdentityAnchorContext extends IContext {
  digitalIdentityAnchor: IEntityIssue;
}

export interface IDigitalFacilityRecordContext extends IContext {
  digitalFacilityRecord: IEntityIssue;
}

export interface IDigitalConformityCredentialContext extends IContext {
  digitalConformityCredential: IEntityIssue;
}

export interface ITraceabilityEventContext extends IContext {
  traceabilityEvent: IEntityIssue;
}
