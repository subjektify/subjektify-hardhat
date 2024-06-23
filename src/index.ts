import hardhat from 'hardhat';
import { extendEnvironment, task } from "subjektify";
import "./types";

extendEnvironment((sre) => {
    sre.hardhat = hardhat;
});

const tasks = [
    "check",
    "clean",
    "compile",
    "node",
    "test",
    "vars"
];

tasks.forEach((taskName) => {
    task(taskName, async (_, sre) => {
        await sre.hardhat.run(taskName);
    });
});
