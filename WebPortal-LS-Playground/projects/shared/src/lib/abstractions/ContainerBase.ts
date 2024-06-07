import { InputSignal } from '@angular/core';
import { Module } from '../services/module.service';

export interface ContainerBase {
  module: InputSignal<Module | unknown>;
}
