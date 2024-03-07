import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReviewModel {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @Column({nullable: false})
    userId: number;

    @Column({nullable: false})
    trainerId:number;

    @Column({nullable: false})
    rating: number;

    @Column({nullable: false})
    comment: string;

    @Column({nullable: false})
    createdAt: Date;
}