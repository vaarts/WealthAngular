export class Fund{
    map(arg0: (item: { fundAmc: any; }) => any): Iterable<unknown> | null | undefined {
      throw new Error('Method not implemented.');
    }
    fundId: number;
    fundName: string;
    fundAmc: string;
    fundRisk: string;
    fundType: string;
    fundAum: number;
    fundNav: number;
    fundMgr:string;
    fundDesc:string;

    constructor(){
        this.fundId = 0;
        this.fundName ='';
        this.fundAmc='';
        this.fundRisk='';
        this.fundType='';
        this.fundAum=0;
        this.fundNav=0;
        this.fundMgr='';
        this.fundDesc='';
    }
 }