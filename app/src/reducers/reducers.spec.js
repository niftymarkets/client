import * as reducers from "./reducers";
import * as types from "../actions/actionTypes";

describe("user reducer", () => {
  const mockUser = {
    userDetails: {},
    wishList: [],
    userItems: [],
    transactionHistory: {
      boughtItems: [],
      soldItems: []
    },

    addItem: {
      name: "",
      price: "",
      description: "",
      category: "Outfits", // this is the default value for dropdown
      userId: "",
      img_url: "",
      availability: ""
    }
  };

  it("should return the initial state", () => {
    expect(reducers.user(undefined, {})).toEqual(mockUser);
  });

  it("should update wishlist", () => {
    expect(
      reducers.user(mockUser, {
        type: types.GET_WISHLIST,
        payload: [
          {
            wishlistId: 1,
            sellerId: 10,
            itemId: 20,
            name: "Magikarp"
          }
        ]
      })
    ).toEqual({
      userDetails: {},
      wishList: [
        {
          wishlistId: 1,
          sellerId: 10,
          itemId: 20,
          name: "Magikarp"
        }
      ],
      userItems: [],
      transactionHistory: {
        boughtItems: [],
        soldItems: []
      },

      addItem: {
        name: "",
        price: "",
        description: "",
        category: "Outfits", // this is the default value for dropdown
        userId: "",
        img_url: "",
        availability: ""
      }
    });
  });
});
