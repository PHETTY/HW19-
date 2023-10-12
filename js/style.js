import React from "react";
import { BreadcrumbsFor } from "./BreadcrumbsFor";
import { FilterIcon } from "./FilterIcon";
import { Footer } from "./Footer";
import { HeaderIcons } from "./HeaderIcons";
import { NavBarWith } from "./NavBarWith";
import { PageNumbers } from "./PageNumbers";
import { PolaroidCard } from "./PolaroidCard";
import { RevivalVintageLogo2 } from "./RevivalVintageLogo2";
import { SaleButton } from "./SaleButton";
import { SortByDropdown } from "./SortByDropdown";
import "./style.css";

export const WomenSVintage = () => {
  return (
    <div className="women-s-vintage">
      <div className="div-2">
        <RevivalVintageLogo2 className="revival-vintage-logo" />
        <img className="banners" alt="Banners" src="banners-4-1.png" />
        <Footer
          AMEXIcon="AMEX-icon-2.png"
          applePay="apple-pay-2.png"
          cashappIcon="cashapp-icon-2.png"
          className="footer-instance"
          copyrightIcon="copyright-icon-2.png"
          discoverIcon="discover-icon-2.png"
          image="image-1-2.png"
          img="line-9-2.svg"
          line="line-8-2.svg"
          mastercardIcon="mastercard-icon-2.png"
          socialMediaIcons="social-media-icons-2.png"
          squarePay="square-pay-2.png"
          visaIcon="visa-icon-2.png"
        />
        <div className="new-arrivals-page">
          <div className="overlap-group">
            <div className="rectangle-header">
              <div className="rectangle" />
            </div>
            <div className="text-wrapper-11">WOMEN’S VINTAGE</div>
            <div className="rediscover-retro">REDISCOVER RETRO CHIC.</div>
          </div>
        </div>
        <div className="women-s-clothing">
          <PolaroidCard
            className="polaroid-card-instance"
            polaroidPhotoPolaroidPhotoClassName="design-component-instance-node"
            priceClassName="polaroid-card-3"
            text="BETSY JOHNSON VINTAGE DRESS | MED"
            text2="$45"
            titleClassName="polaroid-card-2"
          />
          <PolaroidCard
            className="polaroid-card-4"
            polaroidPhotoPolaroidPhotoClassName="polaroid-card-5"
            priceClassName="polaroid-card-3"
            text="LIGHT BLUE PUFF SLEEVE DRESS | SMALL"
            text2="$46"
            titleClassName="polaroid-card-6"
          />
          <div className="overlap">
            <PolaroidCard
              className="polaroid-card-instance"
              polaroidPhotoPolaroidPhotoClassName="polaroid-card-7"
              priceClassName="polaroid-card-9"
              text="AQUA MUSIC NOTE BLOUSE | MED"
              text2="$38"
              titleClassName="polaroid-card-8"
            />
            <SaleButton className="sale-button-instance" />
          </div>
        </div>
        <div className="women-s-clothing-2">
          <div className="overlap-2">
            <PolaroidCard
              className="polaroid-card-instance"
              polaroidPhotoPolaroidPhotoClassName="polaroid-card-10"
              priceClassName="polaroid-card-9"
              text="1960&#39;S GREEN &amp; WHITE FLORAL SHORTS | SMALL"
              text2="$38"
              titleClassName="polaroid-card-11"
            />
            <SaleButton className="sale-button-2" />
          </div>
          <PolaroidCard
            className="polaroid-card-4"
            polaroidPhotoPolaroidPhotoClassName="polaroid-card-12"
            priceClassName="polaroid-card-3"
            text="1960&#39;S HOT PINK KNIT DRESS | LG"
            text2="$68"
            titleClassName="polaroid-card-13"
          />
          <PolaroidCard
            className="polaroid-card-14"
            polaroidPhotoPolaroidPhotoClassName="polaroid-card-15"
            priceClassName="polaroid-card-3"
            text="GOLD CHAIN CHOKER"
            text2="$32"
            titleClassName="polaroid-card-16"
          />
        </div>
        <div className="women-s-clothing-3">
          <PolaroidCard
            className="polaroid-card-instance"
            polaroidPhotoPolaroidPhotoClassName="polaroid-card-17"
            priceClassName="polaroid-card-3"
            text="BROWN JUSTIN COWBOY BOOTS | WOMEN 9.5"
            text2="$58"
            titleClassName="polaroid-card-18"
          />
          <PolaroidCard
            className="polaroid-card-4"
            polaroidPhotoPolaroidPhotoClassName="polaroid-card-19"
            priceClassName="polaroid-card-3"
            text="1960&#39;S BLACK BEADED BLOUSE | MED"
            text2="$50"
            titleClassName="polaroid-card-20"
          />
          <PolaroidCard
            className="polaroid-card-14"
            polaroidPhotoPolaroidPhotoClassName="polaroid-card-21"
            priceClassName="polaroid-card-3"
            text="WINNIE THE POOH BABY TEE"
            text2="$25"
            titleClassName="polaroid-card-22"
          />
        </div>
        <div className="filter-section">
          <FilterIcon className="filter-icon" />
          <SortByDropdown className="sort-by-dropdown-instance" selectAnOptionArrowhead="arrowhead-4.png" />
        </div>
        <BreadcrumbsFor
          arrow="arrow-2.png"
          breadcrumbText="CLOTHING &amp; ACCESSORIES"
          breadcrumbText1="WOMEN&#39;S VINTAGE"
          className="breadcrumbs-for-pages"
          img="arrow-3.png"
          property1="tiertiary-page"
        />
        <PageNumbers
          className="page-numbers-instance"
          leftArrowhead="left-arrowhead-2.png"
          rightArrowhead="right-arrowhead-2.png"
        />
        <HeaderIcons
          className="header-icons-instance"
          fullShoppingCart="full-shopping-cart-2.svg"
          headerIcons="header-icons-2.svg"
          img="header-icons-3.svg"
          property1="full-shopping-cart"
        />
        <NavBarWith
          className="nav-bar-with-dropdown-2"
          navBarTitleProperty1="hover"
          property1="nav-bar-with-dropdown"
        />
      </div>
    </div>
  );
};
