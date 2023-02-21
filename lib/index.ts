import { rdcslData } from "./data";
import { Distict, Region } from "./interface";

class RDCSL {
  private store: Array<Region> = rdcslData;

  public get regions(): Array<string> {
    const region = this.store.map((region) => region.name).sort();
    return region;
  }

  public get districts(): Array<string> {
    const districts: Array<string> = [];

    this.store.forEach((region) =>
      region.districts.forEach((district) => districts.push(district.name))
    );

    return districts.sort();
  }

  public get chiefdoms(): Array<string> {
    const chiefdoms: Array<string> = [];
    this.store.forEach((region) =>
      region.districts.forEach((district) =>
        chiefdoms.push(...district.chiefdoms)
      )
    );

    return chiefdoms.sort();
  }

  public regionDistricts(region: string): Array<string> | null {
    const regionObject = this.store.find(
      (reg) => reg.name.toLowerCase() === region.toLowerCase()
    );
    if (!regionObject) return null;
    return regionObject.districts.map((district) => district.name);
  }

  public districtChiefdoms(district: string): any {
    let districtObject: Distict;
    let regionName;

    this.store.every((region) => {
      const check = region.districts.find(
        (d) => d.name.toLowerCase() === district.toLowerCase()
      );

      if (check) {
        districtObject = check;
        regionName = region.name;
        return false;
      }

      return true;
    });

    if (!districtObject) return null;

    return districtObject.chiefdoms;
  }

  public regionObject(region: string): Region | null {
    const regionObject = this.store.find((reg) => reg.name.toLowerCase() === region.toLowerCase());
    if (!regionObject) return null;
    return regionObject;
  }

  public districtObject(district: string): any {
    let districtObject;
    let regionName;

    this.store.every((region) => {
      const check = region.districts.find((d) => d.name.toLowerCase() === district.toLowerCase());

      if (check) {
        districtObject = check;
        regionName = region.name;
        return false;
      }
    });

    if (!districtObject) return null;

    return { region: regionName, ...districtObject };
  }
}

export default new RDCSL();
