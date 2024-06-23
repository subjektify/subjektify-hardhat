import "subjektify/dist/types/config";
import "subjektify/dist/types/runtime";

import { HardhatRuntimeEnvironment, HardhatUserConfig } from "hardhat/types";

declare module "subjektify/dist/types/config" {

    export interface SubjektifyConfig {
        hardhat?: HardhatUserConfig;
    }
}


declare module "subjektify/dist/types/runtime" {

    export interface SubjektifyRuntimeEnvironment {
        hardhat: HardhatRuntimeEnvironment;
    }
}
