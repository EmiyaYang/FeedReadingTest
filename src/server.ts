import { ApolloServer } from "apollo-server";

class DemoServer extends ApolloServer {
  constructor(config: any) {
    super(config);
  }

  start() {
    this.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  }
}

export default DemoServer;
