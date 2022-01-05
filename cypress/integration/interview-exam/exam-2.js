// 載入套件
const { _ } = Cypress;

it('TEST 2', () => {
    cy.request({
        // 取得全部資料
        method : 'GET',
        url : 'https://swapi.dev/api'
    }).then(function(response){
            expect(response.body).to.have.property('films');
            cy.visit(response.body.films);
            cy.request({
                // 取得全部影集資料
                method : 'GET',
                url : response.body.films
        }).then(function(response){
            expect(response.body).to.have.property('count');
            let films = [];
            // 自訂義 key 的名字
            _.each(response.body.results, (film) => {
                expect(film).to.have.property('title');
                expect(film).to.have.property('episode_id');
                // 把取得的電影名稱 & 每集代號存起來
                films.push({
                    episode_id: film.episode_id,
                    title: film.title,
                });
            })
            // 根據陣列內的 episode_id 從小到大排序
            films = _.sortBy(films, ['episode_id']);
            cy.log(films);
        })
    })
})