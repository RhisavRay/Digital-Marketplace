export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor's Picks",
                href: "#",
                imgSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imgSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: "BestSellers",
                href: "#",
                imgSrc: "/nav/ui-kits/purple.jpg"
            }
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Favourite Icon Picks",
                href: "#",
                imgSrc: "/nav/icons/picks.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imgSrc: "/nav/icons/new.jpg"
            },
            {
                name: "BestSelling Icons",
                href: "#",
                imgSrc: "/nav/icons/bestsellers.jpg"
            }
        ]
    }
]