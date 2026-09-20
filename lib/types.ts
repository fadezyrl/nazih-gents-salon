export type Locale = "EN" | "UR";

export type NavLink = {
  href: string;
  labelKey: string;
};

export type ServiceItem = {
  id: string;
  number: string;
  nameKey: string;
  descKey: string;
  photoTagKey: string;
};

export type LocationItem = {
  id: string;
  indexKey: string;
  cityKey: string;
  addressKey: string;
  hoursKey: string;
  phoneKey: string;
  emailKey: string;
  directionsHref: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    links: {
      grooming: string;
      experience: string;
      locations: string;
      contact: string;
    };
    cta: string;
    openMenu: string;
    closeMenu: string;
    switchToUrdu: string;
    switchToEnglish: string;
  };
  hero: {
    since: string;
    titleLine1: string;
    titleLine2: string;
    taglineLine1: string;
    taglineLine2: string;
    bookCta: string;
    exploreCta: string;
    scroll: string;
    photoTag: string;
  };
  heritage: {
    numeral: string;
    eyebrow: string;
    lead: string;
    copy: string;
    photoTags: {
      archival: string;
      tools: string;
      portrait: string;
    };
  };
  grooming: {
    titleLine1: string;
    titleLine2: string;
    note: string;
    services: {
      haircuts: { name: string; desc: string; photoTag: string };
      beard: { name: string; desc: string; photoTag: string };
      facial: { name: string; desc: string; photoTag: string };
      moroccanBath: { name: string; desc: string; photoTag: string };
    };
  };
  experience: {
    word1: string;
    word2: string;
    word3: string;
    copy: string;
    photoTag: string;
  };
  team: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    note: string;
    members: {
      member01: { name: string; role: string; photoTag: string };
      member02: { name: string; role: string; photoTag: string };
      member03: { name: string; role: string; photoTag: string };
      member04: { name: string; role: string; photoTag: string };
    };
  };
  locations: {
    title: string;
    addressLabel: string;
    hoursLabel: string;
    directions: string;
    tabsLabel: string;
    mapLabel: string;
    items: {
      dubai: { index: string; city: string; address: string; hours: string };
      sharjah: { index: string; city: string; address: string; hours: string };
      rak: { index: string; city: string; address: string; hours: string };
    };
  };
  testimonial: {
    sectionLabel: string;
    prev: string;
    next: string;
    slideStatus: string;
    items: {
      ahmed: { quote: string; name: string; photoTag: string };
      omar: { quote: string; name: string; photoTag: string };
      khalid: { quote: string; name: string; photoTag: string };
    };
  };
  closing: {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    bookCta: string;
    contactLabels: {
      addr: string;
      tel: string;
      mail: string;
      hrs: string;
    };
    contacts: {
      dubai: {
        city: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
      };
      sharjah: {
        city: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
      };
      rak: {
        city: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
      };
    };
  };
  footer: {
    brand: string;
    since: string;
    navTitle: string;
    locationsTitle: string;
    connectTitle: string;
    instagram: string;
    contact: string;
    copyright: string;
    tagline: string;
  };
};
