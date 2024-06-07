import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import About from "@/components/home/about/About";
import ProductCategory from "@/components/home/productCategory/ProductCategory";
import Slider from "@/components/home/slider/Slider";
import Product from "@/components/home/product/Product";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";
import iconMenu from "@/assets/images/icon/icon-menu.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black">
      <div>
        {/* MOBILE */}
        <div className="header-mobile hidden-md hidden">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <a href="#menu" className="btn-menu-mobile">
                  <i className="fal fa-bars" />
                </a>
              </div>
              <div className="col-6 logo text-center">
                <a
                  href="https://themes.sikidodemo.com/demo-website/web53/"
                  title="Coffee"
                >
                  <img
                    src="uploads/source/logo/logo.png"
                    alt="Coffee"
                    title="Coffee"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  className="js_btn_panel__sidebar btn-search-mobile"
                  href="#search-sidebar"
                >
                  <i className="fal fa-search" />
                </a>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* <div class="search">
		<form class="navbar-form form-search" action="search" method="get" role="search" style="margin:0;padding:0;">
			<div class="form-group" style="margin:0;padding:0;width: calc( 100% - 50px);float:left;">
				<input class="form-control search-field" type="text" value="" name="keyword" placeholder="Tìm kiếm" style="width: 100%;">
				<input type="hidden" value="products" name="type">
			</div>
			<button type="submit" class="btn btn-search btn-default" style="width:50px;float:left;"><i class="fa fa-search" aria-hidden="true"></i></button>
		</form>
	</div> */}
        </div>

        <div className="panel--sidebar td-search-wrap-mob" id="search-sidebar">
          <div
            className="td-drop-down-search"
            aria-labelledby="td-header-search-button"
          >
            <form method="get" className="td-search-form" action="search">
              <div role="search" className="td-search-input">
                <input
                  id="td-header-search-mob"
                  type="text"
                  name="keyword"
                  autoComplete="off"
                  placeholder="Tìm kiếm..."
                />
                <input type="hidden" defaultValue="products" name="type" />
              </div>
              <button className="td-search-button" type="submit">
                <i className="fal fa-search" />
              </button>
            </form>
            <div className="loading ng-star-inserted ">
              <div className="vs-loading__load vs-loading--default">
                <div className="lds">
                  <div className="lds__1" />
                  <div className="lds__2" />
                </div>
              </div>
            </div>
            <div id="td-aj-search-mob" />
          </div>
          <div className="panel__close">
            <a href="#" className="js_panel__close">
              <i className="fal fa-times" />
            </a>
          </div>
        </div>

        <div id="td-search-wrap-dest" style={{ display: "none" }}>
          <div className="search">
            <form
              className="navbar-form form-search"
              action="search?type=products"
              method="get"
              role="search"
              style={{ margin: 0, padding: 0 }}
            >
              <div className="form-group" style={{ margin: 0, padding: 0 }}>
                <input
                  className="form-control search-field"
                  type="text"
                  name="keyword"
                  placeholder="Tìm kiếm"
                  id="searchInput"
                />
                <input type="hidden" defaultValue="products" name="type" />
              </div>
              <button
                type="submit"
                className="btn btn-search btn-default"
                style={{ width: 50 }}
              >
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <nav
          id="menu"
          className="menu-mobile hidden"
          style={{ display: "none" }}
        >
          <ul>
            <li>
              <a href="trang-chu">TRANG CHỦ</a>
            </li>
            <li>
              <a href="ca-phe">CÀ PHÊ</a>
            </li>
            <li>
              <a href="san-pham">THỰC ĐƠN</a>
              <ul>
                <li>
                  <a href="do-an">Đồ ăn</a>
                </li>
                <li>
                  <a href="an-vat">Ăn vặt</a>
                </li>
                <li>
                  <a href="do-uong">Đồ uống</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="do-uong">ĐỒ UỐNG</a>
            </li>
            <li>
              <a href="ve-chung-toi">VỀ CHÚNG TÔI</a>
            </li>
            <li>
              <a href="lien-he">LIÊN HỆ</a>
            </li>
          </ul>
        </nav>

        <div className="panel--sidebar" id="cart-sidebar">
          <div className="panel__header">
            <h3>Giỏ hàng</h3>
            <div className="panel__close">
              <a href="#" className="js_panel__close">
                <i className="fal fa-times" />
              </a>
            </div>
          </div>
          <div className="panel__content">
            <div className="loading ng-star-inserted ">
              <div className="vs-loading__load vs-loading--default">
                <div className="lds">
                  <div className="lds__1" />
                  <div className="lds__2" />
                </div>
              </div>
            </div>
            <div className="cart-error" />
            <div className="js_cart_item_result p-3">
              <div className="cart-item-skeleton">
                <div className="grid__column skeleton-img">
                  <div className="skeleton__thumbnail-block">
                    <div className="skeleton__thumbnail" />
                  </div>
                </div>
                <div className="grid__column skeleton-info">
                  <div className="skeleton-info__block">
                    <div className="skeleton-info__title" />
                    <div className="skeleton-info__variant" />
                  </div>
                </div>
              </div>
              <div className="cart-items js_cart_items" />
            </div>
            <div className="cart-collaterals page-cart-right">
              <hr />
              <div className="cart-button pb-3">
                <a className="btn btn-effect-default" href="san-pham">
                  MUA THÊM
                </a>
                <a className="btn btn-effect-default btn-red" href="thanh-toan">
                  THANH TOÁN
                </a>
              </div>
            </div>
          </div>
        </div>

        <Header />

        <Slider />

        <ProductCategory />

        <Product />

        <About />

        <Footer />

        <div className="py-3 px-0 text-center block bg-theme text-white">
          <div className="container">
            <p>© 2024 Coffee</p>
          </div>
        </div>

        <Link
          href="#header"
          className="w-[50px] h-[50px] rounded-full bg-themeLight flex justify-center items-center fixed bottom-5 right-5 text-lg z-50 text-white"
        >
          <FaChevronUp />
        </Link>

        <Link
          href="menu"
          className="w-[80px] h-[80px] rounded-full flex justify-center items-center fixed bottom-20 right-5 text-lg z-50 text-white"
        >
          <Image
            src={iconMenu}
            alt="Icon menu"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
    </main>
  );
}
