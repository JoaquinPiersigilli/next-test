import React from "react";
import Image from "next/image";

import { NavbarTile } from "../Typography";
import HypercoreLogo from "./HypercoreLogo.svg";

import styles from "./component.module.scss";

const Navbar = ({
  selected,
}: {
  selected: "proposals" | "discuss" | "vote";
}) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.hypercoreLogo}>
        <Image src={HypercoreLogo} alt={"Hypercore Logo"} />
      </div>
      <div className={styles.ul}>
        <div>
          <NavbarTile isSelected={selected === "proposals"}>
            Proposals
          </NavbarTile>
        </div>
        <div>
          <NavbarTile
            isSelected={selected === "discuss"}
            linkTo={"https://constellation.discourse.group/"}
            isExternal
            showArrow
          >
            Discuss
          </NavbarTile>
        </div>
        <div>
          <NavbarTile
            isSelected={selected === "vote"}
            linkTo={"https://vote.lattice.is/"}
            isExternal
            showArrow
          >
            Vote
          </NavbarTile>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
