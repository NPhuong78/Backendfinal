import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PostEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;

    @Column({type: 'varchar', nullable: true})
    createdAt: string;

    

    @Column('text')
    image: Array<string>;

   

    @Column('boolean')
    onTheSlide: boolean;
}