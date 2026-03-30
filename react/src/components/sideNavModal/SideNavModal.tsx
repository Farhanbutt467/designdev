"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FaBars } from "react-icons/fa6";
import navigation from "@/config/navigation.json";
import siteConfig from "@/config/siteConfig.json";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SocialShare1 } from "../tools/Social";


const SideNavModal = () => {
  const SideMenuData = navigation.header;
  const { footer_info, social } = siteConfig;

  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <button className="xl:hidden">
            <FaBars />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full border-none">
          <DrawerTitle className="hidden">Side Navigation</DrawerTitle>
          <DrawerDescription className="hidden">
            Navigate through the site menu
          </DrawerDescription>

          <div className="offcanvas-3__area bg-black w-full h-full px-[50px] pt-[50px] pb-[100px]">
            <div className="offcanvas-3__inner flex flex-col md:grid md:grid-cols-[260px_1fr] lg:grid-cols-[340px_1fr] h-full">
              <div className="offcanvas-3__meta-wrapper flex flex-col gap-[50px] justify-between">
                <div className="pb-[50px] md:pb-0">
                  <DrawerClose asChild>
                    <Button className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full border border-[#333337] bg-black-2 relative shadow-sm">
                      <span className="pos-center h-[1px] w-[20px] md:w-[26px] transform -translate-x-1/2 rotate-45 bg-white inline-block"></span>
                      <span className="pos-center h-[1px] w-[20px] md:w-[26px] transform -translate-x-1/2 -rotate-45 bg-white inline-block"></span>
                    </Button>
                  </DrawerClose>
                </div>
                <div className="hidden md:block">
                  <div className="offcanvas-3__meta top-0 relative mb-[60px] md:mb-[90px] lg:mb-[100px] xl:mb-[145px] opacity-100  uppercase text-text-fixed-2 ">
                    <ul>
                      <li className="mb-[19px]">
                        <a
                          href={`tel:${footer_info?.mobile}`}
                          className="underline"
                        >
                          <u>{footer_info?.mobile}</u>
                        </a>
                      </li>
                      <li className="text-[18px] leading-[20px] mb-[19px]">
                        <a href={`mailto:${footer_info?.email}`}>
                          {footer_info?.email}
                        </a>
                      </li>
                      <li>
                        <a href={footer_info?.address?.link} target="_blank">
                          {footer_info?.address?.name}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas-3__social block">
                    <p className=" text-[18px] font-semibold leading-[20px] text-text-fixed-2 uppercase mb-[10px] ">
                      Follow Me
                    </p>
                    <div className="offcanvas-3__social-links flex gap-[20px] text-[18px] text-text-fixed-2">
                      {social.map((item, i) => (
                        <React.Fragment key={`social_share-${i}`}>
                          {SocialShare1(item)}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="offcanvas-3__menu-wrapper flex items-end overflow-y-hidden">
                <nav className="nav-menu offcanvas-3__menu relative w-full h-full overflow-x-hidden text-secondary-2 lg:text-text-3">
                  <ScrollArea className="h-full scrollbar-none">
                    <Accordion type="single" collapsible className="w-full">
                      <div className="absolute left-[8px] top-0 w-[1px] h-full bg-[#333337] hidden md:block"></div>
                      {SideMenuData.map((menuItem, i) =>
                        menuItem.hasChildren ? (
                          <AccordionItem
                            value={`item-${menuItem.name}`}
                            key={menuItem.id}
                            className="!border-0 relative"
                          >
                            <AccordionTrigger
                              className={clsx(
                                " text-[2.5vh] lg:text-[6vh] xl:text-[8vh] hover:text-text-fixed-2 md:pl-[58px] !leading-[0.9]",
                                i !== SideMenuData.length - 1 &&
                                  "mb-5 lg:mb-[26px]"
                              )}
                            >
                              {menuItem.name}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col pl-[20px]">
                              {menuItem.children.map((submenu, k) =>
                                ("hasChildren" in submenu && (submenu as any).hasChildren) ? (
                                  <Accordion
                                    type="single"
                                    collapsible
                                    key={`id-${submenu.id}`}
                                    className="md:pl-[58px]"
                                  >
                                    <AccordionItem
                                      value={`submenuChild-${submenu.id}`}
                                      className="border-0"
                                    >
                                      <AccordionTrigger
                                        className={clsx(
                                          "text-[2.2vh] lg:text-[5.3vh] xl:text-[6.2vh] hover:text-text-fixed-2  mb-[20px] lg:mb-[26px]"
                                        )}
                                      >
                                        {submenu.name}
                                      </AccordionTrigger>
                                      {(submenu as any).children?.map(
                                        (submenuChild: any, j: number) => (
                                          <AccordionContent
                                            className="flex flex-col"
                                            key={submenuChild.id}
                                          >
                                            <DrawerClose asChild>
                                              <Link
                                                href={submenuChild.path}
                                                className="text-[1.9vh] lg:text-[4.58vh] xl:text-[5.36vh] hover:text-text-fixed-2 pl-5 mb-[20px] lg:mb-[26px]"
                                              >
                                                {submenuChild.name}
                                              </Link>
                                            </DrawerClose>
                                          </AccordionContent>
                                        )
                                      )}
                                    </AccordionItem>
                                  </Accordion>
                                ) : (
                                  <DrawerClose asChild key={submenu.id}>
                                    <Link
                                      href={submenu.path}
                                      className="text-[2.2vh] lg:text-[5.3vh] xl:text-[6.2vh] mb-[20px] lg:mb-[26px] hover:text-text-fixed-2 md:pl-[58px]"
                                    >
                                      {submenu.name}
                                    </Link>
                                  </DrawerClose>
                                )
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <DrawerClose asChild key={menuItem.id}>
                            <Link
                              href={menuItem.path}
                              className={clsx(
                                " text-[2.5vh] lg:text-[6vh] xl:text-[8vh] inline-block hover:text-text-fixed-2 md:pl-[58px] !leading-[0.9]",
                                i !== SideMenuData.length - 1 &&
                                  "mb-5 lg:mb-[26px]"
                              )}
                            >
                              {menuItem.name}
                            </Link>
                          </DrawerClose>
                        )
                      )}
                    </Accordion>
                  </ScrollArea>
                </nav>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNavModal;
