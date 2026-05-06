import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DashboardHeaderContent from "../components/DashboardHeaderContent";
import NavDropdown from "react-bootstrap/NavDropdown";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import AppsIcon from "@mui/icons-material/Apps";
import SideBar from "/src/components/SideBar.jsx";
import DashboardCart from "/src/components/DashboardCart.jsx";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Graph from "/src/components/graphsComponents/Graph";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VerticalCardContent from "/src/components/VerticalCardContent"
import VerticalCard from "/src/components/VerticalCard"
import AllAnalyticsInfo from "/src/components/AllAnalyticsInfo";
import {AllProducts} from "/src/contexts/AllProductsContext"
import {UserData} from "/src/contexts/AllDataContext"
import { useContext } from "react";
import ProductsBanner from "/src/components/ProductsBanner";
// src/components/ProductsBanner.jsx


let upperDahsboardData = [
  {
    id: 1,
    link: null,
    headTitle: "great revenu",
    price: "2,480",
    priceExtention: ".32",
    icon: <TrendingUpIcon />,
    moneyFlow: "3.22%",
    msg: "force 293 2916 march",
    state: "su",
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
  {
    id: 2,
    link: null,
    headTitle: "avg cedar value",
    price: "320",
    priceExtention: ".21",
    icon: <TrendingDownIcon />,
    moneyFlow: "-8.33%",
    msg: "force 293 2916 march",
    state: "da",
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
  {
    id: 3,
    link: null,
    headTitle: "total genders",
    price: "1,899",
    priceExtention: ".49",
    icon: <TrendingUpIcon />,
    moneyFlow: "8.33%",
    msg: "force 293 2916 march",
    state: "su",
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
];

let LowerDashboardData = [
  {
    id: 4,
    link: (
      <>
        see more <KeyboardArrowRightIcon />
      </>
    ),
    headTitle: "new york store",
    price: null,
    priceExtention: null,
    icon: <TrendingUpIcon />,
    moneyFlow: null,
    msg: "performance sekr 73%",
    state: null,
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
  {
    id: 5,
    link: (
      <>
        see more <KeyboardArrowRightIcon />
      </>
    ),
    headTitle: "los angeles store",
    price: null,
    priceExtention: null,
    icon: <TrendingUpIcon />,
    moneyFlow: null,
    msg: "performance sekr 73%",
    state: null,
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
  {
    id: 6,
    link: (
      <>
        see more <KeyboardArrowRightIcon />
      </>
    ),
    headTitle: "chikago store",
    price: null,
    priceExtention: null,
    icon: <TrendingUpIcon />,
    moneyFlow: null,
    msg: "performance sekr 73%",
    state: null,
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
  {
    id: 7,
    link: (
      <>
        see more <KeyboardArrowRightIcon />
      </>
    ),
    headTitle: "houston store",
    price: null,
    priceExtention: null,
    icon: <TrendingUpIcon />,
    moneyFlow: null,
    msg: "performance sekr 73%",
    state: null,
    bgColor: "var(--light)",
    textColor: "var(--dark)",
  },
];

function displayCards(upperDahsboardData){
   let newCards=upperDahsboardData.map(card=>{
       return (
         <section className="col-12  mb-xl-0 col-lg-6 col-xl-3" key={card.id}>
           <DashboardCart
             link={card.link}
             mainTitle={card.headTitle}
             price={card.price}
             priceExtention={card.priceExtention}
             state={card.state}
             icon={card.icon}
             percentage={card.moneyFlow}
             message={card.msg}
             btnContent={null}
             extraContent={null}
             bgColor={card.bgColor}
             textColor={card.textColor}
           />
         </section>
       ); 
   });   
   return newCards;
}
export default function Dashboard() {
  let allProducts = useContext(AllProducts);
  let userData  = useContext(UserData);
  let userMainProduct=allProducts.find(product=>{
    return product.id === userData.id;
  })
  console.log(userMainProduct)
  console.log(allProducts)

  return (
    <>
      {/* Nav Bar */}
      <Navbar
        expand="lg"
        className="px-4"
        style={{
          position: "sticky",
          top: "0",
          "z-index": "1000",
          backgroundColor: "var(--gray-light)",
        }}
      >
        <Navbar.Brand href="#home" className="fs-3 d-flex align-items-center">
          <AppsIcon className="fs-2 me-2" />
          <b>Sugar</b>Panel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ms-auto">
            <section className="d-flex align-items-center gap-3 flex-sm-column-reverse justify-content-center flex-lg-row">
              <NavDropdown
                title="EN"
                id="basic-nav-dropdown"
                className="rounded-pill py-1 px-2 bg-light"
              >
                <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">AR</NavDropdown.Item>
              </NavDropdown>
              {/* Scale Btn */}
              <button
                type="button"
                className="navBtn btn btn-light position-relative rounded-circle p-2"
              >
                <FitScreenIcon />
              </button>
              {/* Messages Btn */}
              <button
                type="button"
                className="navBtn btn btn-light position-relative rounded-circle p-2"
              >
                <ChatIcon />
              </button>
              {/* Notifications Btn */}
              <button
                type="button"
                className="navBtn btn btn-light position-relative rounded-circle p-2"
              >
                <NotificationsIcon />
              </button>
              <section
                class="rounded-circle overflow-hidden"
                style={{ width: "3rem", height: "3rem", cursor: "pointer" }}
              >
                <img src={userData.img} alt="" className="w-100 h-100" />
              </section>
            </section>
            {/* Main Profile Btn*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* === Nav Bar === */}
      {/* Side Bar */}
      <SideBar />
      {/*=== Side Bar ===*/}

      {/* Inner Content  */}

      <section
        className="px-4 pt-4"
        style={{ marginLeft: "5rem", width: "calc(100% - 5rem)" }}
      >
        {/* Dashboard Header Content */}
        <DashboardHeaderContent />

        {/*=== Dashboard Header Content ===*/}
        <section className="row g-3 pb-4">
          <section className="col-12 col-lg-6 col-xl-3 mb-xl-0">
            <DashboardCart
              mainTitle={"sharpen your skill with professional online"}
              price={null}
              priceExtention={null}
              state={null}
              icon={<TrendingUpIcon />}
              percentage={null}
              message={null}
              btnContent={"upgrade now"}
              extraContent={null}
              bgColor={"var(--bs-primary)"}
              textColor={"var(--light)"}
            />
          </section>
          {displayCards(upperDahsboardData)}
        </section>

        <section className="row pb-4" style={{ minHeight: "50rem" }}>
          <section className="col-12 col-lg-9">
            <section className="row" style={{ height: "100%" }}>
              <section className="col-12 col-xl-6 mb-4 mb-xl-0">
                <Graph
                  title="transiaction activity"
                  type="tr"
                  selections={{
                    one: "last year",
                    two: "this year",
                    three: "5 years ago",
                  }}
                  extraComponent={null}
                />
                <p className="my-4"></p>
                <Graph
                  title="order by time"
                  type="or"
                  selections={{
                    one: "jan 2025",
                    two: "jun 2025",
                    three: "may 2026",
                  }}
                  extraComponent={null}
                />
              </section>
              <section className="col-12 col-xl-6 mb-4  mb-lg-0 ">
                <Graph
                  title="sales performance"
                  type="sp"
                  selections={{
                    one: "last year",
                    two: "this year",
                    three: "5 years ago",
                  }}
                  extraComponent={null}
                />
                <p className="my-4"></p>
                <Graph
                  title="product statistics"
                  type="ps"
                  selections={{
                    one: "last year",
                    two: "this year",
                    three: "5 years ago",
                  }}
                  extraComponent={null}
                />
              </section>
            </section>
          </section>
          <section className="col-12 col-lg-3">
            {/* to edit */}
            <VerticalCard
              heading="total genders"
              selections={null}
              linkContent="see more"
              innerComponent={<VerticalCardContent />}
            />
          </section>
        </section>

        {/* Cards */}
        <section className="row  pb-4 g-4">
          {displayCards(LowerDashboardData)}
        </section>
        {/* === Cards === */}

        {/* Products List */}
        <section className="row pb-4" style={{ height: "40rem" }}>
          <section className="col-12 col-lg-8 mb-3 mb-lg-0">
            <ProductsBanner
              itemsNum={allProducts.length}
              icon={<TrendingUpIcon />}
              state={true}
              percentage="8.3"
            />
          </section>

          <section className="col-12 col-lg-4">
            <VerticalCard
              heading="total genders"
              selections={null}
              linkContent="see more"
              innerComponent={<AllAnalyticsInfo />}
            />
          </section>
        </section>
        {/*=== Products List ===*/}
      </section>
      {/*=== Inner Content  ===*/}
    </>
  );
}
