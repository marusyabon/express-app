const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
      const Article = require('./Article')
      return {
          messages: {
              relation: Model.HasManyRelation,
              modelClass: Article,
              join: {
                  from: 'users.id',
                  to: 'articles.user_id'
              }
          }
      }
  }
}

module.exports = User;