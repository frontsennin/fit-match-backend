import { TrainerModule } from './modules/trainer/trainer.module';
import { ReviewModule } from './modules/review/review.module';
import { PaymentModule } from './modules/payment/payment.module';
import { NotificationModule } from './modules/notification/notification.module';
import { FitnessClassModule } from './modules/fitness-class/fitness-class.module';
import { AppontmentModule } from './modules/appontment/appontment.module';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nicolasmazia666:eA9mnpuHyf3Uy1fy@cluster0.lam9nsg.mongodb.net/'),
    ConfigModule.forRoot(),
    TrainerModule,
    ReviewModule,
    PaymentModule,
    NotificationModule,
    FitnessClassModule,
    AppontmentModule,
    UserModule,
  ],
})
export class AppModule { }
