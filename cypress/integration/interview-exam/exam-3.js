// 載入套件
const { _ } = Cypress;

it('TEST 3', () => {
    cy.request({
        // 取得全部資料
        method : 'GET',
        url : 'https://swapi.dev/api'
    }).then(function(response){
            expect(response.body).to.have.property('vehicles');
            cy.visit(response.body.vehicles);
            cy.request({
                // 取得全部交通工具 url
                method : 'GET',
                url : response.body.vehicles
        }).then(function(response){
            expect(response.body).to.have.property('count');
            let vehiclesCount = response.body.count;
            // 因為每頁最多 10 筆，所以根據總數算出迴圈最多跑幾次即可
            vehiclesCount = Math.round(vehiclesCount/10);
            let vehicles = [];
            let j = 1;
            for (let i = 0; i < vehiclesCount; i++) {
                cy.request({
                    // 取得每頁裡的交通工具資訊
                    method : 'GET',
                    url : `https://swapi.dev/api/vehicles/?page=${j}`
                }).then(function(response){
                    expect(response.body).to.have.property('results');
                    _.each(response.body.results, (vehicle) => {
                        // 若馬力達 1000 的交通工具，則存起來
                        if (vehicle.cargo_capacity >= 1000 ) {
                            vehicles.push({
                                name: vehicle.name,
                                cargo_capacity: vehicle.cargo_capacity
                            });
                        }
                    })
                    cy.log(vehicles);
                })
                j++;
            }
        })
    })
})