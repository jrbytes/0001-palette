import { ImageProps } from 'next/image'
import styles from './styles.module.css'
import React from 'react'

interface ComponentsAndProps {
  id: string
  firstName: string
  age: string
  location: string
  beverage: string
  image: React.ReactElement<ImageProps>
}

export function ComponentsAndProps (props: ComponentsAndProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <strong className={styles.blue}>ID:</strong> {props.id} <br />
        <strong className={styles.blue}>First Name:</strong> {props.firstName} <br />
        <strong className={styles.blue}>Age:</strong> {props.age} <br />
        <strong className={styles.blue}>Location:</strong> {props.location} <br />
        <strong className={styles.blue}>Beverage:</strong> {props.beverage}
      </div>
      {props.image}
    </div>
  )
}