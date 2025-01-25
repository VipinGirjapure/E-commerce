import { NavLink } from "react-router-dom";
import "./NavigationMenu.css"
const categories = [
    {
        "id": 1,
        "name": "Electronics",
        "path": "/electronics",
        "subcategories": [
            {
                "id": 101,
                "name": "Mobile Phones",
                "path": "/electronics/mobile-phones"
            },
            {
                "id": 102,
                "name": "Laptops",
                "path": "/electronics/laptops"
            },
            {
                "id": 103,
                "name": "Televisions",
                "path": "/electronics/televisions"
            }
        ]
    },
    {
        "id": 2,
        "name": "Clothing",
        "path": "/clothing",
        "subcategories": [
            {
                "id": 201,
                "name": "Men's Clothing",
                "path": "/clothing/mens-clothing"
            },
            {
                "id": 202,
                "name": "Women's Clothing",
                "path": "/clothing/womens-clothing"
            },
            {
                "id": 203,
                "name": "Kids' Clothing",
                "path": "/clothing/kids-clothing"
            }
        ]
    },
    {
        "id": 3,
        "name": "Home & Kitchen",
        "path": "/home-kitchen",
        "subcategories": [
            {
                "id": 301,
                "name": "Furniture",
                "path": "/home-kitchen/furniture"
            },
            {
                "id": 302,
                "name": "Appliances",
                "path": "/home-kitchen/appliances"
            },
            {
                "id": 303,
                "name": "Decor",
                "path": "/home-kitchen/decor"
            }
        ]
    },
    {
        "id": 3,
        "name": "Home & Kitchen",
        "path": "/home-kitchen",
        "subcategories": [
            {
                "id": 301,
                "name": "Furniture",
                "path": "/home-kitchen/furniture"
            },
            {
                "id": 302,
                "name": "Appliances",
                "path": "/home-kitchen/appliances"
            },
            {
                "id": 303,
                "name": "Decor",
                "path": "/home-kitchen/decor"
            }
        ]
    }, {
        "id": 3,
        "name": "Home & Kitchen",
        "path": "/home-kitchen",
        "subcategories": [
            {
                "id": 301,
                "name": "Furniture",
                "path": "/home-kitchen/furniture"
            },
            {
                "id": 302,
                "name": "Appliances",
                "path": "/home-kitchen/appliances"
            },
            {
                "id": 303,
                "name": "Decor",
                "path": "/home-kitchen/decor"
            }
        ]
    }, {
        "id": 3,
        "name": "Home & Kitchen",
        "path": "/home-kitchen",
        "subcategories": [
            {
                "id": 301,
                "name": "Furniture",
                "path": "/home-kitchen/furniture"
            },
            {
                "id": 302,
                "name": "Appliances",
                "path": "/home-kitchen/appliances"
            },
            {
                "id": 303,
                "name": "Decor",
                "path": "/home-kitchen/decor"
            }
        ]
    }, {
        "id": 3,
        "name": "Home & Kitchen",
        "path": "/home-kitchen",
        "subcategories": [
            {
                "id": 301,
                "name": "Furniture",
                "path": "/home-kitchen/furniture"
            },
            {
                "id": 302,
                "name": "Appliances",
                "path": "/home-kitchen/appliances"
            },
            {
                "id": 303,
                "name": "Decor",
                "path": "/home-kitchen/decor"
            }
        ]
    },
    {
        "id": 4,
        "name": "Books",
        "path": "/books",
        "subcategories": null
    }
]

const NavigationMenu = () => {
    return <div className="" style={{minWidth: 300, padding: "0 10px 0 0 ",marginTop:30 }}>
        {categories.map((item) => {
            return <div className="" style={{ margin: '20px 0' }} key={item.id}>
                <NavLink className={'navlink'} to={"/mens_fashion"}>{item.name}</NavLink>
            </div>
        })

        }
    </div>
}
export default NavigationMenu;