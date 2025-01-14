import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  chatId: string
}
