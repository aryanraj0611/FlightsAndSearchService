class  CrudRepository{
    constructor(model) {
        this.model= model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    async destroy(modelId) {
        try {
            await this.model.destroy({
                where:{
                    id: modelId
                }
            });
            return true;
        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    async getAll(data) {
        try {

        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    async update(data) {
        try {

        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}