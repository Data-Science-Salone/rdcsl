import { rdcslData } from "./data";
import { Distict, Region } from "./interface";

export class RDCSL {
  private store: Array<Region> = rdcslData;

  public get regions(): Array<string> {
    const region = this.store.map((region) => region.name).sort();
    return region;
  }

  public get districts(): Array<string> {
    const districts = [];

    this.store.forEach((region) =>
      region.districts.forEach((district) => districts.push(district.name))
    );

    return districts.sort();
  }

  public get chiefdoms(): Array<string> {
    const chiefdoms = [];
    this.store.forEach((region) =>
      region.districts.forEach((district) =>
        chiefdoms.push(...district.chiefdoms)
      )
    );

    return chiefdoms.sort();
  }

  public regionObject(region: string): Region | null {
    const regionObject = this.store.find((reg) => reg.name == region);
    if (regionObject) return null;
    return regionObject;
  }

  public districtObject(district: string): any {
    let districtObject;
    let regionName;

    this.store.every((region) => {
      const check = region.districts.find((d) => d.name === district);

      if (check) {
        districtObject = check;
        regionName = region.name;
        return false;
      }
    });

    if (districtObject) return null;

    return { region: regionName, ...districtObject };
  }
}
