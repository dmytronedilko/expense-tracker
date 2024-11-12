import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(user_id: number) {
    const user = await this.prisma.user.findUnique({
      where: { user_id },
    });

    if (!user) {
      return { message: 'User not found' };
    }

    return user
  }

  async update(user_id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: { user_id },
        data: updateUserDto,
      });
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        /* 
        Error code P2025 in Prisma means 
        "An operation failed because it depends on one or more records 
        that were required but not found. {cause}"
        */
        return { message: 'User not found' };
      }
      throw error;
    }
  }

  async remove(user_id: number) {
    try {
      const user = await this.prisma.user.delete({
        where: { user_id },
      });
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        /* 
        Error code P2025 in Prisma means 
        "An operation failed because it depends on one or more records 
        that were required but not found. {cause}"
        */
        return { message: 'User not found' };
      }
      throw error;
    }
  }

}
