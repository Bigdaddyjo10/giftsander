export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
    }

    get giftHTMLTemplate() {
        return `
        <div class="col-md-3 mx-4 py-2">
            <div class="card " style="width: 15rem">
              <img onclick="app.GiftController.openGift('${this.id}')" src="${this.url}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${this.tag}</h5>
              </div>
            </div>
          </div>
    `
    }




}







// {
//     "_id": "667dcd4a22ff47978b4b2abe",
//         "tag": "Getting Bootstrap on day 3",
//             "url": "https://images.unsplash.com/photo-1647221598272-9aa015392c81?q=60&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//                 "opened": false,
//                     "creatorId": "63922fd4274d85e20428e306",
//                         "profileIdsOpened": [],
//                             "createdAt": "2024-06-27T20:36:26.658Z",
//                                 "updatedAt": "2024-06-27T20:36:26.658Z",
//                                     "__v": 0,
//                                         "profilesOpened": [],
//                                             "id": "667dcd4a22ff47978b4b2abe"
// }