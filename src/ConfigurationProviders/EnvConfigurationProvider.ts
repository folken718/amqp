import * as dotenv from 'dotenv';
import { IConfigurationProvider } from '../Interfaces/IConfigurationProvider';
import { IConfigurations } from '../Interfaces/IConfigurations';
dotenv.config();

const amqpServer = `amqp://${process.env.AMQP_HOST}:${process.env.AMQP_PORT}` || 'amqp://localhost:5672';
const queue = process.env.QUEUE || 'ExampleQueue';
const exchange = process.env.EXCHANGE || 'ExampleExchange';
const routeKey = process.env.ROUTE_KEY || 'xyz';

export class EnvConfigurationsProvider implements IConfigurationProvider {
  getAmqpURL(): string {
    return amqpServer;
  }
  getHost(): string {
    return process.env.AMQP_HOST || 'localhost';
  }
  getPort(): string {
    return process.env.AMQP_PORT || '5672';
  }
  getQueue(): string {
    return queue;
  }
  getExchange(): string {
    return exchange;
  }
  getRouteKey(): string {
    return routeKey;
  }
  getConfigurations(): IConfigurations {
    return { amqpServer: amqpServer, queue: queue, exchange: exchange, routeKey: routeKey };
  }
}
