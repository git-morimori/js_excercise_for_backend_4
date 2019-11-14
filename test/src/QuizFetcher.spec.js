const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');
const axios = require('axios');

describe('QuizFetcherクラスの挙動確認', () => {

    it('fetchという名前の クラスメソッド を持つ', () => {
        assert.strictEqual(typeof QuizFetcher.fetch, 'function');
    });

    it('【async/await版】fetchメソッドの戻り値の型チェック', async () => {

        const response = await QuizFetcher.fetch();
        const results = response.results;

        //results プロパティはは10件データをもつ配列
        assert.strictEqual(results.length, 10);
        assert.strictEqual(Array.isArray(results), true);

        //results プロパティの配列の要素であるオブジェクトのデータ型を確認
        results.forEach((data) => {
            assert.strictEqual(typeof data.category, 'string');
            assert.strictEqual(typeof data.type, 'string');
            assert.strictEqual(typeof data.difficulty, 'string');
            assert.strictEqual(typeof data.question, 'string');
            assert.strictEqual(typeof data.correct_answer, 'string');

            //incorrect_answersプロパティは3件の文字列を含む配列
            assert.strictEqual(data.incorrect_answers.length, 3);
            assert.strictEqual(Array.isArray(data.incorrect_answers), true);

            //incorrect_answersプロパティの配列の要素のデータ型を確認
            data.incorrect_answers.forEach((answer) => {
                assert.strictEqual(typeof answer, 'string');
            });
        });

    });



    it('【コールバック(done)版】fetchメソッドの戻り値の型チェック', (done) => {

        QuizFetcher.fetch()
            .then((response) => {
                const results = response.results;

                //results プロパティはは10件データをもつ配列
                assert.strictEqual(results.length, 10);
                assert.strictEqual(Array.isArray(results), true);

                //results プロパティの配列の要素であるオブジェクトのデータ型を確認
                results.forEach((data) => {
                    assert.strictEqual(typeof data.category, 'string');
                    assert.strictEqual(typeof data.type, 'string');
                    assert.strictEqual(typeof data.difficulty, 'string');
                    assert.strictEqual(typeof data.question, 'string');
                    assert.strictEqual(typeof data.correct_answer, 'string');

                    //incorrect_answersプロパティは3件の文字列を含む配列
                    assert.strictEqual(data.incorrect_answers.length, 3);
                    assert.strictEqual(Array.isArray(data.incorrect_answers), true);

                    //incorrect_answersプロパティの配列の要素のデータ型を確認
                    data.incorrect_answers.forEach((answer) => {
                        assert.strictEqual(typeof answer, 'string');
                    });
                });

                done();
            });
    });


    it('【Promise版】fetchメソッドの戻り値の型チェック', () => {

        return QuizFetcher
            .fetch()
            .then((response) => {
                const results = response.results;

                //results プロパティはは10件データをもつ配列
                assert.strictEqual(results.length, 10);
                assert.strictEqual(Array.isArray(results), true);

                //results プロパティの配列の要素であるオブジェクトのデータ型を確認
                results.forEach((data) => {
                    assert.strictEqual(typeof data.category, 'string');
                    assert.strictEqual(typeof data.type, 'string');
                    assert.strictEqual(typeof data.difficulty, 'string');
                    assert.strictEqual(typeof data.question, 'string');
                    assert.strictEqual(typeof data.correct_answer, 'string');

                    //incorrect_answersプロパティは3件の文字列を含む配列
                    assert.strictEqual(data.incorrect_answers.length, 3);
                    assert.strictEqual(Array.isArray(data.incorrect_answers), true);

                    //incorrect_answersプロパティの配列の要素のデータ型を確認
                    data.incorrect_answers.forEach((answer) => {
                        assert.strictEqual(typeof answer, 'string');
                    });
                });
            });
    });
});
