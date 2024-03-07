import { TrainerModule } from './modules/trainer/trainer.module';
import { ReviewModule } from './modules/review/review.module';
import { PaymentModule } from './modules/payment/payment.module';
import { NotificationModule } from './modules/notification/notification.module';
import { FitnessClassModule } from './modules/fitness-class/fitness-class.module';
import { AppontmentModule } from './modules/appontment/appontment.module';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
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
