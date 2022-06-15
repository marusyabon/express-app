const { Model } = require('objection');

class Article extends Model {
  static get tableName() {
    return 'articles';
  }

  static get relationMappings() {
    const User = require('./User')
    return {
        writer: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'articles.user_id',
                to: 'users.id'
            }
        }
    }
}
}

module.exports = Article;