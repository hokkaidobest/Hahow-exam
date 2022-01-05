it('TEST 1', () => {
    cy.request({
        // 取得全部資料
        method : 'GET',
        url : 'https://swapi.dev/api'
    }).then(function(response){
        expect(response.body).to.have.property('films');
        cy.request({
            // 取得全部影集資料
            method : 'GET',
            url : response.body.films
        }).then(function(response){
            expect(response.body).to.have.property('results');
            const filmsId = response.body.results[5].episode_id;
            cy.request({
                // 取得第六部曲裡的腳色資料
                method : 'GET',
                url : `https://swapi.dev/api/films/${filmsId}`
            }).then(function(response){
                expect(response.body).to.have.property('characters');
                let speciesCount = 0;
                let speciesArray = [];
                const characters = response.body.characters;
                for(let i = 0; i < characters.length; i++) {
                    // 取得逐個角色的種族 url
                    cy.request({
                        method : 'GET',
                        url : characters[i]
                    }).then(function(response){
                        cy.visit(characters[i]);
                        expect(response.body).to.have.property('species');
                        for (let s = 0; s < response.body.species.length; s++) {
                            const specie = response.body.species[s];
                            // 若該種族為計算過，則 + 1
                            if (speciesArray.indexOf(specie) < 0) {
                                speciesArray.push(specie);
                                speciesCount ++;
                            }
                        }
                        cy.log('第六部腳色總計種族數量'+speciesCount);
                    })
                }
            })
        })
    })
})