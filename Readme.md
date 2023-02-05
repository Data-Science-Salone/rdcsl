# rdcsl: Region, District and Chiefdom

<!-- badges: start -->
[![Build Status](https://img.shields.io/travis/nbubna/Case.svg)](https://travis-ci.org/nbubna/Case)
[![NPM version](https://img.shields.io/npm/v/rdcsl.svg)][npm]
<!-- badges: end -->

Building application require location data to be used as basis for
region, district and chiefdom in Sierra Leone.

### Regions
```javascript
import rdcsl from "rdcsl";

rdcsl.regions // return a list of all the regions in sierra leone
```

### Districts
```javascript
import rdcsl from "rdcsl";

rdcsl.districts // return a list of all the districts in sierra leone
```

### Chiefdoms
```javascript
import rdcsl from "rdcsl";

rdcsl.chiefdoms // return a list of all the chiefdoms in sierra leone
```

### Region Object
```javascript
import rdcsl from "rdcsl";

rdcsl.regionObject("Eastern") // return a object contains districts with their  chiefdoms of the region argument passed in sierra leone
```

### District Object
```javascript
import rdcsl from "rdcsl";

rdcsl.districtObject("Bo") // return a object contains region and chiefdoms of the district argument passed in sierra leone
```

## Release History
* 2023-02-05 [v1.0.0][] (public, initial)