
interface CallingPoint {
    locationName: string;
    crs: string;
    st: string;
    et: string;
    isCancelled: boolean;
    length: number;
    detachFront: boolean;
    affectedByDiversion: boolean;
    rerouteDelay: number;
}

interface CallingPoints {
    callingPoint: CallingPoint[];
    serviceType: string;
    serviceChangeRequired: boolean;
    assocIsCancelled: boolean;
}

interface OriginDestination {
    locationName: string;
    crs: string;
    assocIsCancelled: boolean;
}

interface TrainService {
    previousCallingPoints?: CallingPoints[];
    subsequentCallingPoints?: CallingPoints[];
    futureCancellation: boolean;
    futureDelay: boolean;
    origin: OriginDestination[];
    destination: OriginDestination[];
    sta: string;
    eta: string;
    std: string;
    etd: string;
    platform: string;
    operator: string;
    operatorCode: string;
    isCircularRoute: boolean;
    isCancelled: boolean;
    filterLocationCancelled: boolean;
    serviceType: string;
    length: number;
    detachFront: boolean;
    isReverseFormation: boolean;
    serviceID: string;
}

interface BusService {
    previousCallingPoints?: CallingPoints[];
    subsequentCallingPoints?: CallingPoints[];
    futureCancellation: boolean;
    futureDelay: boolean;
    origin: OriginDestination[];
    destination: OriginDestination[];
    rsid: string;
    std : string
    etd: string
    platform: string;
    operator: string;
    operatorCode: string;
    isCircularRoute: boolean;
    isCancelled: boolean;
    filterLocationCancelled: boolean;
    serviceType: string;
    length: number;
    detachFront: boolean;
    isReverseFormation: boolean;
    serviceID: string;
}

interface Xmlns {
    Count: number;
}

interface NrccMessage {
    Value: string;
}

export interface RootTrainObject {
    trainServices: TrainService[];
    busServices: BusService[];
    Xmlns: Xmlns;
    generatedAt: string;
    locationName: string;
    crs: string;
    filterType: string;
    nrccMessages: NrccMessage[];
    platformAvailable: boolean;
    areServicesAvailable: boolean;
}
