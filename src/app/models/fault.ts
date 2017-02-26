import { MzSystem } from "./mz-system";
import{ FaultType} from "../enums/fault-type.enum";

export class Fault {
   public id: number;
    public system: MzSystem;
    public start: Date;
    public end: Date;
    public totalDownTime: number;
    public faultType: FaultType;
    public description: string;
    public status: number;

  constructor(){}

}
