import * as reducers from "./reducers";
import * as types from "../actions/actionTypes";

describe("user reducer", () => {
  const mockUser = {
    userDetails: {},
    wishList: [],
    userItems: [],

    transactionHistory: {
      boughtItems: [
        {
          itemId: 6,
          name: "Floss",
          price: 29,
          description: "Express yourself on the battlefield.",
          category: "emotes",
          buyerId: 1,
          userId: 2,
          username: "same",
          img_url:
            "https://cdn.thetrackernetwork.com/cdn/fortnite/9AB75723_large.png",
          availability: 0
        },
        {
          itemId: 19,
          name: "Squirtle",
          price: 100,
          description: "One part squirrel, one part turtle",
          category: "pets",
          buyerId: 1,
          userId: 9,
          username: "quinn",
          img_url:
            "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png",
          availability: 0
        }
      ],

      soldItems: [
        {
          itemId: 2,
          name: "Cuddle Team Leader",
          price: 25,
          description: "Hug it out.",
          category: "outfits",
          buyerId: 3,
          userId: 1,
          username: "scott",
          img_url:
            "https://cdn.thetrackernetwork.com/cdn/fortnite/22163_large.png",
          availability: 0
        }
      ]
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
});
