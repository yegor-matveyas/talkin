import { Entity, Generated, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @Generated('uuid')
  chatId: string
}
