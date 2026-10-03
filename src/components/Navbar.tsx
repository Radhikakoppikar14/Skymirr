import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "../data/skymirrData";

interface NavbarProps {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
  onOpenProductDetail?: (productId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = "home",
  onNavigate,
  onOpenProductDetail,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<
    null | "products" | "latest" | "about"
  >(null);

  const searchResults = (() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return PRODUCTS_DATA.filter((product) =>
      [
        product.name,
        product.category,
        product.tagline,
        product.description,
        product.frequencyRange,
        product.dimensions,
        ...product.keyFeatures,
        ...product.applications,
        ...product.specs.flatMap((spec) => [spec.label, spec.value]),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    ).slice(0, 6);
  })();

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const openProduct = (productId: string) => {
    closeSearch();
    if (productId === "tamp-161") {
      onNavigate?.("tamp-161");
      return;
    }
    onOpenProductDetail?.(productId);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults[0]) openProduct(searchResults[0].id);
  };

  const handleNavClick = (route: string) => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
    onNavigate?.(route);
    window.location.hash = "#/" + (route === "home" ? "" : route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (r: string) => currentRoute === r;

  const productsActive =
    isActive("products") ||
    isActive("tamp-161") ||
    isActive("sky5g-router") ||
    isActive("tracker-detail") ||
    isActive("product-detail");
  const latestActive =
    isActive("press-releases") || isActive("blogs") || isActive("the-latest");
  const aboutActive = isActive("about") || isActive("team");

  // One row, never wraps
  const linkCls = (active: boolean) =>
    `h-[52px] relative flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors cursor-pointer ${
      active ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
    }`;

  const Underline = () => (
    <span className="absolute bottom-3 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
  );

  const dropdownCls =
    "absolute top-full left-1/2 -translate-x-1/2 -mt-2 min-w-[13rem] bg-white rounded-2xl border border-slate-200/80 shadow-[0_24px_50px_-16px_rgba(10,18,32,0.3)] p-2 z-50 nav-pop";
  const dropItemCls =
    "w-full text-left whitespace-nowrap px-4 py-2.5 text-sm text-slate-600 rounded-xl hover:text-sky-700 hover:bg-sky-50 transition-colors cursor-pointer";

  const Dropdown = ({
    id,
    label,
    active,
    onClick,
    items,
  }: {
    id: "products" | "latest" | "about";
    label: string;
    active: boolean;
    onClick: () => void;
    items: [string, string][];
  }): React.JSX.Element => (
    <div
      className="relative h-[52px] flex items-center"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button onClick={onClick} className={linkCls(active)}>
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === id ? "rotate-180" : ""}`}
        />
        {active && <Underline />}
      </button>
      <div className={dropdownCls} data-open={openMenu === id} aria-hidden={openMenu !== id}>
        {items.map(([route, text]) => (
          <button
            key={route + text}
            tabIndex={openMenu === id ? 0 : -1}
            onClick={() => handleNavClick(route)}
            className={dropItemCls}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/70">
      <div className="h-5 bg-gradient-to-r from-[#0a0a1c] via-[#101c35] to-[#1e3a8a] text-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-3 text-[8px] font-semibold uppercase tracking-[0.08em] text-white/85 sm:px-4 sm:text-[9px] sm:tracking-[0.2em]">
          <span className="sm:hidden">Enterprise RF Engineering · 5G</span>
          <span className="hidden sm:inline">
            SkyMirr Technologies · Enterprise RF Engineering &amp; 5G
            Infrastructure
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[52px] grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* Logo */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="flex items-center shrink-0"
          aria-label="SkyMirr Home"
        >
          <img
            src={COMPANY_INFO.logo}
            alt="SkyMirr Technologies"
            className="h-8 w-auto max-w-[40vw] object-contain sm:h-9"
          />
        </a>

        {/* Centered primary navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-9">
          <button
            onClick={() => handleNavClick("home")}
            className={linkCls(isActive("home"))}
          >
            <span>Home</span>
            {isActive("home") && <Underline />}
          </button>

          {Dropdown({ id: "products", label: "Products", active: productsActive, onClick: () => handleNavClick("products"), items: [
              ["products", "Antennas"],
              ["sky5g-router", "Routers"],
              ["tracker-detail", "Asset Trackers"],
            ] })}

          <button
            onClick={() => handleNavClick("technology")}
            className={linkCls(isActive("technology"))}
          >
            <span>Technology</span>
            {isActive("technology") && <Underline />}
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className={linkCls(isActive("services"))}
          >
            <span>Services</span>
            {isActive("services") && <Underline />}
          </button>

          {Dropdown({ id: "latest", label: "The Latest", active: latestActive, onClick: () => handleNavClick("press-releases"), items: [
              ["the-latest", "The latest from SkyMirr"],
              ["blogs", "Blogs"],
              ["press-releases", "Press Releases"],
            ] })}

          {Dropdown({ id: "about", label: "About", active: aboutActive, onClick: () => handleNavClick("about"), items: [
              ["about", "About SkyMirr"],
              ["team", "Team & Leadership"],
            ] })}
        </nav>

        {/* Right: search + CTA + mobile toggle */}
        <div className="col-start-3 flex items-center justify-end gap-2 sm:gap-3">
          <div className="relative flex items-center">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-full text-slate-600 hover:text-blue-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Search"
              aria-haspopup="dialog"
              aria-expanded={searchOpen}
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
          </div>

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-full whitespace-nowrap text-sm font-semibold text-white bg-gradient-to-r from-[#0a1220] to-[#16294a] hover:from-sky-600 hover:to-sky-500 shadow-[0_10px_24px_-10px_rgba(10,18,32,0.6)] transition-all duration-300 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="lg:hidden nav-drawer bg-white" data-open={mobileMenuOpen} aria-hidden={!mobileMenuOpen}>
        <div>
        <div className="border-t border-slate-100 px-5 py-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col text-sm font-medium text-slate-700">
            {[
              ["home", "Home"],
              ["products", "Products"],
              ["technology", "Technology"],
              ["services", "Services"],
              ["about", "About"],
              ["team", "Team & Leadership"],
              ["press-releases", "The Latest"],
              ["contact", "Contact Us"],
            ].map(([route, label]) => (
              <button
                key={route}
                onClick={() => handleNavClick(route)}
                className={`text-left py-3 border-b border-slate-100 last:border-0 cursor-pointer transition-colors ${
                  isActive(route) ? "text-blue-600" : "hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
        </div>
      </div>

      {searchOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slate-950/55 px-3 py-4 backdrop-blur-md sm:px-6 sm:py-10"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeSearch();
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") closeSearch();
            }}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-label="Product search"
              className="my-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/80 to-violet-50/80 shadow-2xl animate-slide-up sm:rounded-3xl"
            >
              <form onSubmit={handleSearchSubmit}>
                <div className="flex items-center gap-3 border-b border-blue-100/80 bg-white/75 px-4 py-3 sm:gap-4 sm:px-7 sm:py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 sm:h-12 sm:w-12">
                    <Search className="h-5 w-5" />
                  </span>
                  <input
                    autoFocus
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products, frequencies, and applications"
                    aria-label="Search products, specs, and applications"
                    className="h-12 min-w-0 flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none sm:text-lg"
                  />
                  <kbd className="hidden rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold tracking-wide text-slate-500 sm:inline-flex">
                    ESC
                  </kbd>
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {searchQuery.trim() ? (
                  <div className="max-h-[min(60vh,34rem)] overflow-y-auto p-3 sm:p-5">
                    <h2 className="px-2 pb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:px-3">
                      {searchResults.length > 0
                        ? "Matching products"
                        : "Search results"}
                    </h2>
                    {searchResults.length > 0 ? (
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {searchResults.map((product) => (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() => openProduct(product.id)}
                            className="flex w-full items-start gap-3 rounded-xl border border-slate-200/80 p-4 text-left transition-colors hover:border-blue-200 hover:bg-blue-50/50 focus-visible:bg-blue-50/50"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                              <Search className="h-4 w-4 text-blue-600" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-slate-900">
                                {product.name}
                              </span>
                              <span className="mt-0.5 block truncate text-xs text-slate-600">
                                {product.tagline}
                              </span>
                              <span className="mt-1 block text-[11px] capitalize text-slate-500">
                                {product.category}
                                {product.frequencyRange &&
                                  ` · ${product.frequencyRange}`}
                              </span>
                            </span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex min-h-56 flex-col items-center justify-center px-6 py-10 text-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                          <Search className="h-6 w-6" />
                        </span>
                        <p className="mt-4 text-sm font-semibold text-slate-800">
                          No matching products
                        </p>
                        <p className="mt-1 max-w-sm text-sm text-slate-500">
                          Try a product name, feature, frequency, or
                          application.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex min-h-64 flex-col items-center justify-center bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/50 px-6 py-12 text-center sm:min-h-80">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600">
                      <Search className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 text-lg font-bold text-slate-900">
                      Search the SkyMirr catalog
                    </h2>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                      Find products by name, specification, frequency, or
                      application.
                    </p>
                    <p className="mt-6 border-t border-slate-100 pt-5 text-xs text-slate-400">
                      <span className="font-mono">{PRODUCTS_DATA.length}</span>{" "}
                      products indexed
                    </p>
                  </div>
                )}
              </form>
            </section>
          </div>,
          document.body,
        )}
    </header>
  );
};
