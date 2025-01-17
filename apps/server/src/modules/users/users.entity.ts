import { Entity, Generated, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @Generated('uuid')
  userId: string

  @Column({ unique: true, nullable: false })
  username: string

  @Column()
  password: string
}
